const mongoose = require('mongoose');
const chalk = require('chalk');
module.exports = () => {
	// SAFE TO IGNORE: listening to events on Db class, its deprecated and will be removed on next version
	// https://developer.mongodb.com/community/forums/t/warning-accessing-non-existent-property-mongoerror-of-module-exports-inside-circular-dependency/15411/6
	mongoose.set('useFindAndModify', false);
	mongoose.set('useCreateIndex', true);
	mongoose.set('useNewUrlParser', true);
	mongoose.set('useUnifiedTopology', true);
	mongoose.connect(process.env.MONGODB_URI);
	mongoose.connection.on('error', (err) => {
		console.error(err);
		console.log(
			'%s MongoDB connection error. Please make sure MongoDB is running.',
			chalk.red('✗')
		);
	});
};
