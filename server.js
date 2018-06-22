// server.js
const express = require('express');
const app = express();

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
app.use(forceSSL());
app.use(express.static(__dirname + '/dist'));

const path = require('path');

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
// Run the app by serving the static files
// in the dist directory
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 4200);