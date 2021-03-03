/* eslint-disable no-console */
const app = require('./server/index.js');

const PORT = process.env.PORT || 5000;

app().listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
