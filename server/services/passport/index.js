const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../../models/User');

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

// Google OAUth login
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			callbackURL: 'http://localhost:5000/auth/google/callback',
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
	)
);
