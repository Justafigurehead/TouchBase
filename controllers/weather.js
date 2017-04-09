var express = require('express');
var app = express();
var weatherRouter = express.Router();

var Weather = require('../client/src/models/weather');
var query = new Weather();

weatherRouter.get('/', function(req, res) {
  query.getWeather(function(results) {
    res.json(results);
  });
});

module.exports = weatherRouter;
