const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
	app.use(
		createProxyMiddleware('/auth/google', {
			target: 'http://localhost:5000/',
			changeOrigin: true,
		})
	);
};

// "proxy": {
//   "/auth/*": {
//     "target": "http://localhost:5000"
//   },
//   "/api/*": {
//     "target": "http://localhost:5000"
//   }
// },
