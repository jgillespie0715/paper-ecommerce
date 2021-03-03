/* eslint-disable no-console */
// invoking a new app(express) instance
const app = require('./server')();
const chalk = require('chalk');
const PORT = process.env.PORT || 5000;
const listener = app.listen(PORT, () => {
	if (process.env.NODE_ENV === 'development') {
		console.log(
			chalk.green('✓'),
			chalk.magentaBright`${
				process.env.npm_package_name
			} is running at http://localhost:${listener.address().port} in ${
				process.env.NODE_ENV
			} mode`
		);
	} else {
		console.log(
			chalk.green('✓'),
			chalk.magentaBright`${process.env.npm_package_name} is running at ${
				listener.address().port
			} in ${process.env.NODE_ENV} mode`
		);
	}
});
