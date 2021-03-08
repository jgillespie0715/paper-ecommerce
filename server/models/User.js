const mongoose = require('mongoose');
const { Schema } = mongoose;

// TODO: refactor schema to include signupWithEmail, look at stackoverflow bookmark
const userSchema = new Schema({
	googleId: String,
	displayName: String,
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
