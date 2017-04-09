var express = require('express');
var app = express();
var weatherRouter = express.Router();

var Weather = require('../client/src/models/weather');

weatherRouter.get('/', function(req, res) {

});

module.exports = weatherRouter;
