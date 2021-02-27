const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const path = require('path');
const keys = require('../config/keys');
const cors = require('cors');
const router = require('./routes');

module.exports = () => {
	const app = express();

	// testing db connection
	(async function connect(req, res, next) {
		mongoose.Promise = global.Promise;
		try {
			await mongoose.connect(keys.mongoURI, {
				useMongoClient: true,
				serverSelectionTimeoutMS: 5000,
				family: 4,
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
		} catch (error) {
			console.error('error connecting to db');
			console.log('error: ', error);
		}
	})();

	app.use(cors());

	app.use(bodyParser.json());

	app.use(
		cookieSession({
			maxAge: 30 * 24 * 60 * 60 * 1000,
			keys: [keys.cookieKey],
		})
	);

	app.use('/api', router);

	if (['production'].includes(process.env.NODE_ENV)) {
		app.use(express.static(path.join(__dirname, 'client/build')));

		app.get('*', (req, res) => {
			res.sendFile(path.resolve('client', 'build', 'index.html'));
		});
	}

	app.use((err, req, res, next) => {
		const defaultErr = {
			log: 'Express error handler caught unknown middleware error',
			status: 400,
			message: { err: 'An error occurred' },
		};

		const errorObj = Object.assign(defaultErr, err);
		console.log(errorObj.message);
		console.log(err);
		return res.status(errorObj.status).json(errorObj.message);
	});

	return app;
};
