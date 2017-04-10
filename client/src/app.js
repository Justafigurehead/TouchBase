var UI = require('./views/ui');
var Weather = require('./models/weather');

var app = function(){
  console.log(window.location.pathname);
  var ui = new UI();

  switch(window.location.pathname){
    case '/journal':
      ui.showAllEntries();
      break;
    case '/':
      ui.createForm();
      var weather = new Weather();
      weather.getWeather(function(results){
        console.log(results);
      });
      // weatherUI.displayWeather();
      break;
  }
}

window.onload = app;