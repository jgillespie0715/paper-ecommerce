const express = require('express');
const authRouter = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
console.log('GOOGLE_ID', process.env.GOOGLE_ID);
console.log('GOOGLE_SECRET', process.env.GOOGLE_SECRET);
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
		callbackURL: 'http://localhost:5000/auth/google/callback',
	},
	async (accessToken, refreshToken, profile, done) => {
		console.log('accessToken:', accessToken);
		console.log('refreshToken:', refreshToken);

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

console.log('googleStrategyConfig:', googleStrategyConfig);
passport.use('google', googleStrategyConfig);
function logger(req) {
	console.log(`hit ${req.baseUrl}${req.path}`);
	console.log('originalUrl: ', req.originalUrl);
	console.log('route: ', req.route);
	console.log('protocol: ', req.protocol);
	console.log('hostname: ', req.hostname);
}
function passportLogger(passportObj) {
	console.log('passportObj: ', JSON.stringify(passportObj, null, 2));
}

// /*
// ****************************************************************************
// this app route DOES NOT get a callback, it will never be executed because google executes its own network call to the callback route
// */
// app.get(
// 	'/google',

// 	passport.authenticate('google', {
// 		scope: ['profile', 'email'],
// 		accessType: 'offline',
// 		prompt: 'consent',
// 	})
// );
authRouter.get(
	'/google/callback',
	passport.authenticate('google', { failureRedirect: '/login' }),
	(req, res, next) => {
		res.redirect('/blogs');
	}
);

authRouter.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

// authorize routes
// 	Router.get('/auth/foursquare', passport.authorize('foursquare'));
// Router.get('/auth/foursquare/callback', passport.authorize('foursquare', { failureRedirect: '/api' }), (req, res) => {
//   res.redirect('/api/foursquare');
// });

module.exports = authRouter;
