const express = require('express');
const connectDB = require('./models');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const refresh = require('passport-oauth2-refresh');
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');
//const googleStrategyConfig = require('./services/passport');

module.exports = () => {
	const app = express();
	// server config and db connect
	dotenv.config({ path: 'config/.env' });
	connectDB();
	app.use(cors());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(
		cookieSession({
			maxAge: 30 * 24 * 60 * 60 * 1000,
			keys: [process.env.COOKIEKEY],
		})
	);

	// Passport OAuth session
	app.use(passport.initialize());
	app.use(passport.session());

	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		User.findById(id).then((user) => {
			done(null, user);
		});
	});

	// Google OAUth login
	const googleStrategyConfig = new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			callbackURL: 'http://localhost:8080/auth/google/callback',
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				const existingUser = await User.findOne({ googleId: profile.id });
				if (existingUser) {
					return done(null, existingUser);
				}
				const user = await new User({
					googleId: profile.id,
					displayName: profile.displayName,
				}).save();
				done(null, user);
			} catch (err) {
				done(err, null);
			}
		}
	);

	passport.use('google', googleStrategyConfig);
	//refresh.use('google', googleStrategyConfig);

	app.use('/api', blogRoutes);
	app.use('/auth', authRoutes);

	if (['production'].includes(process.env.NODE_ENV)) {
		app.use(express.static(path.join(__dirname, 'client/build')));

		app.get('*', (req, res) => {
			res.sendFile(path.resolve('client', 'build', 'index.html'));
		});
	}

	app.use((error, req, res, next) => {
		if (!error.statusCode) error.statusCode = 500;

		if (error.statusCode === 301) {
			return res.status(301).redirect('/not-found');
		}

		return res.status(error.statusCode).json({ error: error.toString() });
	});

	return app;
};
