const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
	app.use(
		createProxyMiddleware('/auth/google', {
			target: 'http://localhost:5000',
			// secure and changeOrigin don't affect it, adding the full url as the first argument to createProxyMiddleware or probably proxy in package.json
			//secure: false,
			//changeOrigin: true,
		})
	);
	app.use(
		createProxyMiddleware('/auth/*', {
			target: 'http://localhost:5000',
		})
	);
	app.use(
		createProxyMiddleware('/api/*', {
			target: 'http://localhost:5000',
		})
	);
};
