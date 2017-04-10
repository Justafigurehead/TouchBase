var UI = require('./views/ui');
var WeatherUI = require('./views/weatherUI');

var app = function(){
  console.log(window.location.pathname);
  var ui = new UI();
  var weatherUI = new WeatherUI();

  switch(window.location.pathname){
    case '/journal':
    ui.showAllEntries();
    break;
    case '/':
    ui.createForm();
    weatherUI.showAllWeather();
    break;
  };
}

window.onload = app;