const express = require('express');
const connectDB = require('./models');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');

module.exports = () => {
	const app = express();
	// server config and db connect
	dotenv.config({ path: '.env' });
	connectDB();
	app.use(cors());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(
		session({
			resave: true,
			saveUninitialized: true,
			secret: process.env.SESSION_SECRET,
			cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
			store: MongoStore.create({
				mongoUrl: process.env.MONGODB_URI,
				autoReconnect: true,
			}),
		})
	);

	require('./services/passport');
	// Passport OAuth session
	app.use(passport.initialize());
	app.use(passport.session());

	app.use((req, res, next) => {
		// After successful login, redirect back to the intended page
		if (
			!req.user &&
			req.path !== '/login' &&
			req.path !== '/signup' &&
			!req.path.match(/^\/auth/) &&
			!req.path.match(/\./)
		) {
			req.session.returnTo = req.originalUrl;
		} else if (
			req.user &&
			(req.path === '/account' || req.path.match(/^\/api/))
		) {
			req.session.returnTo = req.originalUrl;
		}
		next();
	});

	/*
****************************************************************************
this app route DOES NOT get a callback, it will never be executed because google executes its own network call to the callback route
// throws error if put into route file with current config because react client is proxying and the signinwithgoogle link is relative, not an api call

*/

	app.get(
		'/auth/google',

		passport.authenticate('google', {
			scope: ['profile', 'email'],
			accessType: 'offline',
			prompt: 'consent',
		})
	);

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
		if (error.name === 'CastError') {
			// specifically handles that error. In my case,
			// if session id gets corrupted, delete the cookie from client browser.
			// req.logout alone was not enough.
			// NB the cookie had been created by cookie-session
			req.session = null;
			req.logout;
			return res.sendStatus(500);
		}
		if (error.statusCode === 301) {
			return res.status(301).redirect('/not-found');
		}

		return res.status(error.statusCode).json({ error: error.toString() });
	});

	return app;
};
