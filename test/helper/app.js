/**
 * New node file
 */


var app = require('../../app.js');
var flights = require('../data');

exports.appWithData = app.app(flights);
exports.appWithoutData = app.app(null);