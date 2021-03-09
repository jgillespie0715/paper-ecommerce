const passport = require('passport');
const validator = require('validator');
const User = require('../../../models/User');

/**
 * POST /login
 * Sign in using email and password.
 */
exports.postLogin = (req, res, next) => {
	const validationErrors = [];
	if (!validator.isEmail(req.body.email))
		validationErrors.push({ msg: 'Please enter a valid email address.' });
	if (validator.isEmpty(req.body.password))
		validationErrors.push({ msg: 'Password cannot be blank.' });

	if (validationErrors.length) {
		console.log('errors', validationErrors);
		return res.redirect('/login');
	}
	req.body.email = validator.normalizeEmail(req.body.email, {
		gmail_remove_dots: false,
	});

	passport.authenticate('local', (err, user, info) => {
		if (err) {
			return next(err);
		}
		if (!user) {
			console.log('errors', info);
			return res.redirect('/login');
		}
		req.logIn(user, (err) => {
			if (err) {
				return next(err);
			}
			console.log('success', { msg: 'Success! You are logged in.' });
			res.redirect(req.session.returnTo || '/');
		});
	})(req, res, next);
};
/*
 * GET /logout
 * Log out.
 */
exports.logout = (req, res) => {
	req.logout();
	req.session.destroy((err) => {
		if (err)
			console.log('Error : Failed to destroy the session during logout.', err);
		req.user = null;
		res.redirect('/');
	});
};

exports.postSignup = async (req, res, next) => {
	const validationErrors = [];
	if (!validator.isEmail(req.body.email))
		validationErrors.push({ msg: 'Please enter a valid email address.' });
	if (!validator.isLength(req.body.password, { min: 8 }))
		validationErrors.push({
			msg: 'Password must be at least 8 characters long',
		});
	if (req.body.password !== req.body.confirmPassword)
		validationErrors.push({ msg: 'Passwords do not match' });

	if (validationErrors.length) {
		console.log('errors', validationErrors);
		return res.redirect('/signup');
	}
	req.body.email = validator.normalizeEmail(req.body.email, {
		gmail_remove_dots: false,
	});
	const user = new User({
		email: req.body.email,
		password: req.body.password,
	});
	console.log('got through creating a new user');
	try {
		const existingUser = await User.findOne({ email: req.body.email });
		if (existingUser) {
			console.log('errors', {
				msg: 'Account with that email address already exists.',
			});
			return res.redirect('/signup');
		}
		user.save((err) => {
			if (err) {
				return next(err);
			}
			req.logIn(user, (err) => {
				if (err) {
					return next(err);
				}
				next();
			});
		});
	} catch (error) {
		next(error);
	}
};

/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/login');
};
