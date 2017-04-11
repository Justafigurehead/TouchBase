var Entries = require('../models/entries');

var UI = function(){
}

UI.prototype = {
  createForm: function(){
    var div = document.getElementById('entryForm');
    var form = document.createElement('form');

    var titleInput = document.createElement('input');
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("placeholder", "Dear Diary...");
    titleInput.setAttribute("maxlength", "20");
    form.appendChild(titleInput);

    var entryTextInput = document.createElement('textarea');
    entryTextInput.setAttribute("name", "entryText");
    entryTextInput.setAttribute("id", "entryText");
    entryTextInput.setAttribute("placeholder", "Write about your day...")
    entryTextInput.setAttribute("maxlength", "450");
    form.appendChild(entryTextInput);

    var button = document.createElement("button");
    button.type = 'submit';
    button.innerText = 'Add Entry';
    form.appendChild(button);

    var dateNow = function(){
      var date = new Date();
      var time = date.toLocaleTimeString();
      var YMD = date.toLocaleDateString('en-GB');
      var prettyDate = YMD + " " + time ;
      console.log(prettyDate);
      return prettyDate;
    }

    form.onsubmit = function(e){
      e.preventDefault();
      console.log("Button Clicked")
      var newEntry = {
        title: e.target.title.value,
        date: dateNow(),
        entry_text: e.target.entryText.value
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