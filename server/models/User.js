const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	displayName: String,
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
