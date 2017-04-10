var Entries = require('../models/entries');

var UI = function(){
}

UI.prototype = {
  render: function(entries){
    var container = document.getElementById('all-entries');
    var id_number = 0;
    for (var entry of entries){
      var div = document.createElement('div');
      div.setAttribute("id", "entry-" + id_number);
      id_number++;

      var ul = document.createElement('ul');

      var liTitle = document.createElement('li');
      liTitle.innerHTML = "<h2>" + entry.title + "</h2>";
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
  },
  showAllEntries:  function(){
    var entries = new Entries();
    entries.all(function(result){
      this.render(result);
    }.bind(this));
  },
  createForm: function(){
    var div = document.getElementById('entryForm');
    var form = document.createElement('form');

    var titleInput = document.createElement('input');
    titleInput.setAttribute("name", "title");
    form.appendChild(titleInput);

    var dateInput = document.createElement('input');
    dateInput.setAttribute("name", "date");
    form.appendChild(dateInput);

    var entryTextInput = document.createElement('input');
    entryTextInput.setAttribute("name", "entry_text");
    form.appendChild(entryTextInput);

    var button = document.createElement("button");
    button.type = 'submit';
    button.innerText = 'Add Entry';
    form.appendChild(button);

    form.onsubmit = function(e){
      e.preventDefault();
      console.log("Button Clicked")
      var newEntry = {
        title: e.target.title.value,
        date: e.target.date.value,
        entry_text: e.target.entry_text.value
      }


      var entries = new Entries();
      entries.add(newEntry, function(data){
        console.log(data);
      });
    }

    div.appendChild(form);
  }
};

module.exports = UI;