var Entry = require('./entry');

var Entries = function(){

}

Entries.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },
  all: function(callback){
    this.makeRequest("http://localhost:3000/journal/data", function(){
      if(this.status !==200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);

      var entries = Entries.prototype.populateEntries(results);
        callback(entries);
    });
  },
  populateEntries: function(results){
    var entries = [];
    results.forEach(function(result){
      var entry = new Entry(result);
      entries.push(entry);
    });
    return entries;
  },
  add: function(callback){
    console.log("adding film");
  }
}

module.exports = Entries;