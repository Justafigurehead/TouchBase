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

  switch(window.location.pathname){
    case '/journal':
    ui.showAllEntries();
    break;
>>>>>>> feature/weather
    case '/':
    ui.createForm();
    weatherUI.showAllWeather();
    break;
  };
}

window.onload = app;