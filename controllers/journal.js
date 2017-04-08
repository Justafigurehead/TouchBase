var express = require('express');
var app = express();
var journalRouter = express.Router();

var Entry = require('../client/src/models/entry');

var JournalQuery = require('../client/src/db/journalQuery');
var query = new JournalQuery();

journalRouter.get('/', function(req, res){
  query.all(function(results){
    debugger;
    res.sendFile(path.join(__dirname + '/../client/build/journal.html'));
  });
});

module.exports = journalRouter;
