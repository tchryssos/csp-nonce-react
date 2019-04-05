const express = require('express');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const app = express();
let nonce;

// Custom Middleware
const logRequests = (req, res, next) => {
  const date = new Date
  const body = req.body || ''
  console.log(`[${date.getTime()}]:`, req.method, req.path, body)
  next()
}

// Middlewares
app.use(logRequests);
app.get('/*', (req, res, next) => {
  // Set nonce
  nonce = crypto.randomBytes(16).toString('base64');
  res.setHeader(
    'Content-Security-Policy',
    `script-src 'nonce-${nonce}' 'strict-dynamic' https:`
  )

  // Handle navigation
  const reqPath = req.path === '/' ? 'index.html' : req.path
  if (reqPath.includes('.html')) {
    const reqFilePath = path.resolve(__dirname, 'www', reqPath)
    const html = fs
      .readFileSync(reqFilePath, 'utf8')
      .replace('<script ', `<script nonce="${nonce}" `)
    res.send(html)
  } else {
    app.use(express.static(__dirname + '/www'));
    next()
  }
})

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Website listening at http://%s:%s', host, port);
});
