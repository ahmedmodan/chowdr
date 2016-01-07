var express = require('express');
// The folowing line declares a `db` variable that does not seem to be used anywhere
var db = require('./db.js');

var app = express();

require('./config/middleware.js')(app, express);

module.exports = app;
