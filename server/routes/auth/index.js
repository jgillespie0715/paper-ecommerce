const express = require('express');
const authRouter = express.Router();
const passport = require('passport');

authRouter.get(
	'/google/callback',
	passport.authenticate('google', { failureRedirect: '/login' }),
	(req, res, next) => {
		// this is redirecting to blogs which are empty right now it is carrying get method
		res.redirect('http://localhost:3000');
	}
);

authRouter.get('/current_user', (req, res, next) => {
	console.log('HIT current_user');
	res.send(req.user);
});

authRouter.get('/logout', (req, res) => {
	req.logout();
	res.redirect('http://localhost:3000');
});

module.exports = authRouter;
