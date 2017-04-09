var Entries = require('../models/entries');

var UI = function(){
  var entries = new Entries();
  entries.all(function(result){
    this.render(result);
  }.bind(this));
}

UI.prototype = {
  render: function(entries){
    var container = document.getElementById('all-entries');
    var id_number = 0;

    for (var entry of entries){
      var div = document.createElement('div');
      div.setAttribute("id", "entry-" + id_number);
      console.log(id_number);
      id_number++;

      var ul = document.createElement('ul');

      var liTitle = document.createElement('li');
      liTitle.innerHTML = "<h2>" + entry.title + "</h2>";
      console.log(liTitle)
      var liDate = document.createElement('li');
      liDate.innerHTML = "<em>" + entry.date + "</em>";

      var liEntryText = document.createElement('li');
      liEntryText.innerHTML = "<p>" + entry.entry_text + "</p>";

      ul.appendChild(liTitle);
      ul.appendChild(liDate);
      ul.appendChild(liEntryText);
      div.appendChild(ul);
      container.appendChild(div);
    }
  }
};

module.exports = UI;