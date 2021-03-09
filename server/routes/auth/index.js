const express = require('express');
const authRouter = express.Router();
const passport = require('passport');

const {
	postLogin,
	postSignup,
	logout,
	isAuthenticated,
} = require('./controllers');

// for dev, while react application is proxying to localhost:5000;
authRouter.get(
	'/google/callback',
	passport.authenticate('google', {
		successRedirect: 'http://localhost:3000/',
		failureRedirect: '/login',
	})
);
// authRouter.get(
// 	'/google/callback',
// 	passport.authenticate('google', { failureRedirect: '/login' }),
// 	(req, res) => {
// 		res.redirect(req.session.returnTo || '/');
// 	}
// );

authRouter.get('/current_user', (req, res, next) => {
	console.log('HIT current_user');
	res.send(req.user);
});

authRouter.post('/login', postLogin);

authRouter.get('/logout', logout);

authRouter.post('/signup', postSignup, (req, res, next) => {
	res.redirect(req.session.returnTo || '/');
});

module.exports = authRouter;
