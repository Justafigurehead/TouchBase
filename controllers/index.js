var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/journal', require('./journal'));

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/main.html'));
});

router.get('/away', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/away.html'));
});
module.exports = router;