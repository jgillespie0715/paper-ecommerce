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

authRouter.get('/logout', (req, res) => {
	req.logout();
	res.redirect('http://localhost:3000');
});

module.exports = authRouter;
