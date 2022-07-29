const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/playlist',
    createProxyMiddleware({
      target: `http://localhost:${process.env.API_PORT || 3000}`,
      changeOrigin: true,
    })
  );
};