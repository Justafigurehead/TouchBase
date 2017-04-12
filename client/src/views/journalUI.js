var Entries = require('../models/entries');

var JournalUI = function(){
  
}

JournalUI.prototype = {
  render: function(entries){
    var container = document.getElementById('all-entries');
    for (var entry of entries){
      var divContainer = document.createElement('div');
      divContainer.setAttribute("class", "entry-container");
      var contentDiv = document.createElement('div');
      contentDiv.setAttribute("class", "entry-list");


      var divTitle = document.createElement('div');
      divTitle.innerHTML = "<h2>" + entry.title + "</h2>";
      divTitle.setAttribute("class", "entry-title");
      var divDate = document.createElement('div');
      divDate.innerHTML = "<em>" + entry.date + "</em>";
      divDate.setAttribute("class", "entry-date");
      var divEntryText = document.createElement('div');
      divEntryText.innerHTML = "<p>" + entry.entry_text + "</p>";
      divEntryText.setAttribute("class", "entry-entryText")

      contentDiv.appendChild(divTitle);
      contentDiv.appendChild(divDate);
      contentDiv.appendChild(divEntryText);
      divContainer.appendChild(contentDiv);
      container.appendChild(divContainer);
    }
  },
  showAllEntries:  function(){
    var entries = new Entries();
    entries.all(function(result){
      this.render(result);
    }.bind(this));
  }
}

module.exports = JournalUI;