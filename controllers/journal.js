var express = require('express');
var app = express();
var journalRouter = express.Router();
var path = require('path');

var Entries = require('../client/src/models/entries')();
var Entry = require('../client/src/models/entry');

var JournalQuery = require('../client/db/journalQuery');
var query = new JournalQuery();

journalRouter.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/journal.html'));
});

journalRouter.get('/data', function(req, res){
  query.all(function(results){
    res.json(results);
  });
});

journalRouter.post('/', function(req, res){
  var entry = new Entry({
    title: req.body.title,
    date: req.body.date,
    entry_text: req.body.entry_text
  });
  query.add(entry, function(results){
    res.json(results);
  })
})

module.exports = journalRouter;
