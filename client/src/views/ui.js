var Entries = require('../models/entries');
var MapWrapper = require('../models/map');
var GeoCoder = require('../models/geoCoder');

var UI = function(){
}

UI.prototype = {
  createForm: function(){
    var div = document.getElementById('entryForm');
    var form = document.createElement('form');

    var titleInput = document.createElement('input');
    titleInput.setAttribute("name", "title");
    form.appendChild(titleInput);

    var entryTextInput = document.createElement('input');
    entryTextInput.setAttribute("name", "entry_text");
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
        entry_text: e.target.entry_text.value
      }
      
      var entries = new Entries();
      entries.add(newEntry, function(data){
        console.log(data);
      });
    }

    div.appendChild(form);
  },

  displayMap: function() {
    var container = document.getElementById('home-map');
    var center = {
      lat: 55.8,
      lng: -4
    };
    var zoom = 10;
    var mainMap = new MapWrapper(container, center, zoom);
  }

};

module.exports = UI;