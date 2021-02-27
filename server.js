const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const path = require('path');
const keys = require('./config/keys');

module.exports = () => {
	const app = express();

	mongoose.Promise = global.Promise;
	mongoose.connect(keys.mongoURI, { useMongoClient: true });

	app.use(bodyParser.json());
	app.use(
		cookieSession({
			maxAge: 30 * 24 * 60 * 60 * 1000,
			keys: [keys.cookieKey],
		})
	);

	if (['production'].includes(process.env.NODE_ENV)) {
		app.use(express.static('client/build'));

		app.get('*', (req, res) => {
			res.sendFile(path.resolve('client', 'build', 'index.html'));
		});
	}
	return app;
};
