const { createProxyMiddleware } = require('http-proxy-middleware'); // help to direct
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.n2yo.com',
            changeOrigin: true,
        })
    );
};
