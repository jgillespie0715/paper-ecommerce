/* eslint-disable no-console */
// invoking a new app(express) instance
const app = require('./server')();
const chalk = require('chalk');
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	if (process.env.NODE_ENV === 'development') {
		console.log(
			chalk.green('✓'),
			chalk.magentaBright`${process.env.npm_package_name} is running at http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
		);
	} else {
		console.log(
			chalk.green('✓'),
			chalk.magentaBright`${process.env.npm_package_name} is running at ${PORT} in ${process.env.NODE_ENV} mode`
		);
	}
});
