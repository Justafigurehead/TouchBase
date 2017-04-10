var UI = require('./views/ui');
var JournalUI = require('./views/journalUI');
var WeatherUI = require('./views/weatherUI');

var app = function(){
  console.log(window.location.pathname);
  var ui = new UI();
  var journalUI = new JournalUI();
  var weatherUI = new WeatherUI();


  switch(window.location.pathname){
    case '/journal':
      journalUI.showAllEntries();
      break;
    case '/':
    ui.createForm();
    weatherUI.showAllWeather();
    ui.displayMap();
    break;
  };
}

window.onload = app;