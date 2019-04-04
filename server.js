const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const crypto = require('crypto');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const history = require('connect-history-api-fallback');
const app = express();
const compiler = webpack(webpackConfig);

// Custom Middleware
const logRequests = (req, res, next) => {
  const date = new Date
  const body = req.body || ''
  console.log(`[${date.getTime()}]:`, req.method, req.path, body)
  next()
}

const setCSP = (req, res, next) => {
  nonce = crypto.randomBytes(16).toString('base64');
  res.setHeader(
    'Content-Security-Policy',
    `script-src 'nonce-${nonce}'`
  )
  next()
}

// Middlewares
app.use(history())
app.use(express.static(__dirname + '/www'));
app.use(logRequests);
app.use(setCSP);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
    warnings: false,
  },
}));

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Website listening at http://%s:%s', host, port);
});
