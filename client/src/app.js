var UI = require('./views/ui');
var JournalUI = require('./views/journalUI');
var WeatherUI = require('./views/weatherUI');
var AwayUI = require('./views/awayUI');
var Away = require('./models/away');
var MapUI = require('./views/mapUI');


var app = function(){
  console.log(window.location.pathname);
  var ui = new UI();
  var journalUI = new JournalUI();
  var weatherUI = new WeatherUI();
  var awayUI = new AwayUI();
  var mapUI = new MapUI();


  switch(window.location.pathname){
    case '/journal':
      journalUI.showAllEntries();
      break;
    case '/':
      ui.createForm();
      mapUI.displayMap();
      weatherUI.showAllWeather();
    break;
    case '/away':
      awayUI.showCountries();
    break;
  };
}

window.onload = app;