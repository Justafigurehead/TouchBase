var MongoClient = require('mongodb').MongoClient;

var JournalQuery = function() {
  this.url = 'mongodb://localhost:27017/travel_journal'; //connects into the mongodb
};

JournalQuery.prototype = {
  all: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      var collection = db.collection('entries');
      collection.find().toArray(function(err, docs) {
        onQueryFinished(docs);
        console.log('Hello from JournalQuery!')
      });
    });
  }
};

module.exports = JournalQuery;

