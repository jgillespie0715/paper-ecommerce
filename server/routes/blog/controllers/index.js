const requireLogin = (req, res, next) => {
	// if (!req.user) {
	// return res.status(401).send({ error: 'You must log in!' });
	// }

	console.log('req.user: ', req.user);
	next();
};

module.exports = {
	requireLogin,
};
