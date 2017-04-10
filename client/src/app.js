var UI = require('./views/ui');

var app = function(){
  console.log(window.location.pathname);
  var ui = new UI();

  switch(window.location.pathname){
    case '/journal':
      ui.showAllEntries();
      break;
    case '/':
      ui.createForm();
      ui.displayWeather();
      break;
  }
}

window.onload = app;