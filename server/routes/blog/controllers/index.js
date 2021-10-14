const requireLogin = (req, res, next) => {
	if (!req.user) {
		return res.status(401).send({ error: 'You must log in!' });
	}
	next();
};

const isAuthenticated = (req, res, next) => {
	try {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/auth/login');
		}
	} catch (error) {
		next(error);
	}
};
module.exports = {
	requireLogin,
	isAuthenticated,
};
