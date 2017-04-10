var UI = require('./views/ui');

var app = function(){
  console.log(window.location);
  new UI();
}

window.onload = app;