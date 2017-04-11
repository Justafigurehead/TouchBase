var UI = require('./views/ui');
var JournalUI = require('./views/journalUI');
var WeatherUI = require('./views/weatherUI');
var AwayUI = require('./views/awayUi');

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
    case '/away':
    away.makeRequest();
    awayUI.showCountries();
    break;
  };
}

window.onload = app;