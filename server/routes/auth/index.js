const express = require('express');
const authRouter = express.Router();
const passport = require('passport');

authRouter.get('/google', (req, res, next) => {
	passport.authenticate('google', {
		scope: ['profile', 'email'],
		accessType: 'offline',
		prompt: 'consent',
	});
});

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
