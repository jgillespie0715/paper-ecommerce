const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/User');
const moment = require('moment');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id)
		.then((user) => {
			done(null, user);
		})
		.catch((error) => {
			done(error);
		});
});

/**
 * Sign in using Email and Password.
 */
passport.use(
	new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
		User.findOne({ email: email.toLowerCase() }, (err, user) => {
			if (err) {
				return done(err);
			}
			if (!user) {
				return done(null, false, { msg: `Email ${email} not found.` });
			}
			if (!user.password) {
				return done(null, false, {
					msg:
						'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.',
				});
			}
			user.comparePassword(password, (err, isMatch) => {
				if (err) {
					return done(err);
				}
				if (isMatch) {
					return done(null, user);
				}
				return done(null, false, { msg: 'Invalid email or password.' });
			});
		});
	})
);

/**
 * Sign in with Google.
 */
const googleStrategyConfig = new GoogleStrategy(
	{
		clientID: process.env.GOOGLE_ID,
		clientSecret: process.env.GOOGLE_SECRET,
		callbackURL: 'http://localhost:5000/auth/google/callback',
		passReqToCallback: true,
	},
	(req, accessToken, refreshToken, params, profile, done) => {
		if (req.user) {
			User.findOne({ google: profile.id }, (err, existingUser) => {
				if (err) {
					return done(err);
				}
				if (existingUser && existingUser.id !== req.user.id) {
					console.log('errors', {
						msg:
							'There is already a Google account that belongs to you. Sign in with that account or delete it, then link it with your current account.',
					});
					done(err);
				} else {
					User.findById(req.user.id, (err, user) => {
						if (err) {
							return done(err);
						}
						user.google = profile.id;
						user.tokens.push({
							kind: 'google',
							accessToken,
							accessTokenExpires: moment()
								.add(params.expires_in, 'seconds')
								.format(),
							refreshToken,
						});
						user.profile.name = user.profile.name || profile.displayName;
						user.profile.gender = user.profile.gender || profile._json.gender;
						user.profile.picture =
							user.profile.picture || profile._json.picture;
						user.save((err) => {
							console.log('info', { msg: 'Google account has been linked.' });
							done(err, user);
						});
					});
				}
			});
		} else {
			User.findOne({ google: profile.id }, (err, existingUser) => {
				if (err) {
					return done(err);
				}
				if (existingUser) {
					return done(null, existingUser);
				}
				User.findOne(
					{ email: profile.emails[0].value },
					(err, existingEmailUser) => {
						if (err) {
							return done(err);
						}
						if (existingEmailUser) {
							console.log('errors', {
								msg:
									'There is already an account using this email address. Sign in to that account and link it with Google manually from Account Settings.',
							});
							done(err);
						} else {
							const user = new User();
							user.email = profile.emails[0].value;
							user.google = profile.id;
							user.tokens.push({
								kind: 'google',
								accessToken,
								accessTokenExpires: moment()
									.add(params.expires_in, 'seconds')
									.format(),
								refreshToken,
							});
							user.profile.name = profile.displayName;
							user.profile.gender = profile._json.gender;
							user.profile.picture = profile._json.picture;
							user.save((err) => {
								done(err, user);
							});
						}
					}
				);
			});
		}
	}
);
passport.use('google', googleStrategyConfig);
