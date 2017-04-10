/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var UI = __webpack_require__(2);
	
	var app = function(){
	  console.log(window.location.pathname);
	  var ui = new UI();
	
	  switch(window.location.pathname){
	    case '/journal':
	      ui.showAllEntries();
	      break;
	    case '/':
	      ui.createForm();
	      break;
	  }
	}
	
	window.onload = app;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Entries = __webpack_require__(3);
	
	var UI = function(){
	}
	
	UI.prototype = {
	  render: function(entries){
	    var container = document.getElementById('all-entries');
	    var id_number = 0;
	    for (var entry of entries){
	      var div = document.createElement('div');
	      div.setAttribute("id", "entry-" + id_number);
	      id_number++;
	
	      var ul = document.createElement('ul');
	
	      var liTitle = document.createElement('li');
	      liTitle.innerHTML = "<h2>" + entry.title + "</h2>";
	      var liDate = document.createElement('li');
	      liDate.innerHTML = "<em>" + entry.date + "</em>";
	
	      var liEntryText = document.createElement('li');
	      liEntryText.innerHTML = "<p>" + entry.entry_text + "</p>";
	
	      ul.appendChild(liTitle);
	      ul.appendChild(liDate);
	      ul.appendChild(liEntryText);
	      div.appendChild(ul);
	      container.appendChild(div);
	    }
	  },
	  showAllEntries:  function(){
	    var entries = new Entries();
	    entries.all(function(result){
	      this.render(result);
	    }.bind(this));
	  },
	  createForm: function(){
	    var div = document.getElementById('entryForm');
	    var form = document.createElement('form');
	
	    var titleInput = document.createElement('input');
	    titleInput.setAttribute("name", "title");
	    form.appendChild(titleInput);
	
	    var dateInput = document.createElement('input');
	    dateInput.setAttribute("name", "date");
	    form.appendChild(dateInput);
	
	    var entryTextInput = document.createElement('input');
	    entryTextInput.setAttribute("name", "entry_text");
	    form.appendChild(entryTextInput);
	
	    var button = document.createElement("button");
	    button.type = 'submit';
	    button.innerText = 'Add Entry';
	    form.appendChild(button);
	
	    form.onsubmit = function(e){
	      e.preventDefault();
	      console.log("Button Clicked")
	      var newEntry = {
	        title: e.target.title.value,
	        date: e.target.date.value,
	        entry_text: e.target.entry_text.value
	      }
	
	
	      var entries = new Entries();
	      entries.add(newEntry, function(data){
	        console.log(data);
	      });
	    }
	
	    div.appendChild(form);
	  }
	};
	
	module.exports = UI;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Entry = __webpack_require__(4);
	
	var Entries = function(){
	
	}
	
	Entries.prototype = {
	  makeRequest: function(url, callback){
	    var request = new XMLHttpRequest();
	    request.open("GET", url);
	    request.onload = callback;
	    request.send();
	  },
	  all: function(callback){
	    this.makeRequest("http://localhost:3000/journal/data", function(){
	      if(this.status !==200) return;
	      var jsonString = this.responseText;
	      var results = JSON.parse(jsonString);
	
	      var entries = Entries.prototype.populateEntries(results);
	        callback(entries);
	    });
	  },
	  populateEntries: function(results){
	    var entries = [];
	    results.forEach(function(result){
	      var entry = new Entry(result);
	      entries.push(entry);
	    });
	    return entries;
	  },
	  add: function(newEntry, callback){
	    debugger;
	    var entryToAdd = JSON.stringify(newEntry);
	    console.log("NEW ENTRY", entryToAdd);
	    this.makePostRequest("http://localhost:3000/journal/data", callback, entryToAdd)
	    
	  },
	  makePostRequest: function(url, callback, payload){
	    var request = new XMLHttpRequest();
	    request.open("POST", url);
	    request.setRequestHeader("Content-type", "application/json");
	    request.onload = callback;
	    console.log(payload);
	    request.send(payload);
	  }
	};
	
	module.exports = Entries;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var Entry = function(options){
	  this.title = options.title;
	  this.date = options.date;
	  this.entry_text = options.entry_text;
	}
	
	
	
	module.exports = Entry;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {config = {
	  entry: __dirname + "/src/app.js",
	  output: {
	    filename: "bundle.js",
	    path: __dirname + "/build"
	  },
	  devtool: 'source-map'
	}
	
	module.exports = config;
	
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map