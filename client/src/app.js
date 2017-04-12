var UI = require('./views/ui');
var JournalUI = require('./views/journalUI');
var WeatherUI = require('./views/weatherUI');
var MapUI = require('./views/mapUI');


var app = function(){
  console.log(window.location.pathname);
  var ui = new UI();
  var journalUI = new JournalUI();
  var weatherUI = new WeatherUI();
  var mapUI = new MapUI();


  switch(window.location.pathname){
    case '/journal':
      journalUI.showAllEntries();
      break;
    case '/':
    ui.createForm();
    weatherUI.showAllWeather();
    mapUI.displayMap();
    break;
  };
}

window.onload = app;