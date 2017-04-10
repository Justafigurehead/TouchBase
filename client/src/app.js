var UI = require('./views/ui');
var JournalUI = require('./views/journalUI');

var app = function(){
  console.log(window.location.pathname);
  var ui = new UI();
  var journalUI = new JournalUI();

  switch(window.location.pathname){
    case '/journal':
      journalUI.showAllEntries();
      break;
    case '/':
      ui.createForm();
      break;
  }
}

window.onload = app;