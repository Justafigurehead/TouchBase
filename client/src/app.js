var UI = require('./views/ui');
var JournalUI = require('./views/journalUI');
var WeatherUI = require('./views/weatherUI');
var AwayUI = require('./views/awayUi');
var Away = require('./models/away');

var app = function(){
  console.log(window.location.pathname);
  var ui = new UI();
  var journalUI = new JournalUI();
  var weatherUI = new WeatherUI();
  var awayUI = new awayUI();


  switch(window.location.pathname){
    case '/journal':
      journalUI.showAllEntries();
      break;
    case '/':
      ui.createForm();
      weatherUI.showAllWeather();
    break;
    case '/away':
      away.makeRequest();
      awayUI.showCountries();
    break;
  };
}

window.onload = app;