const passport = require('passport');
const dotenv = require('dotenv');
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');
const User = require('../../models/User');

dotenv.config({ path: 'config/.env' });

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

//passport.use('google', googleStrategyConfig);
//refresh.use('google', googleStrategyConfig);

module.exports = {
	googleStrategyConfig,
};
