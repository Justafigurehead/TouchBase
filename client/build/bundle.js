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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var UI = __webpack_require__(4);

var app = function(){
  new UI();
}

window.onload = app;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Entry = __webpack_require__(3);

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
  }
}

module.exports = Entries;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var Entry = function(options){
  this.title = options.title;
  this.date = options.date;
  this.entry_text = options.entry_text;
}

module.exports = Entry;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Entries = __webpack_require__(2);

var UI = function(){
  var entries = new Entries();
  entries.all(function(result){
    this.render(result);
  }.bind(this));
}

UI.prototype = {
  render: function(entries){
    var container = document.getElementById('all-entries');
    var id_number = 0;

    for (var entry of entries){
      var div = document.createElement('div');
      div.setAttribute("id", "entry-" + id_number);
      console.log(id_number);
      id_number++;

      var ul = document.createElement('ul');

      var liTitle = document.createElement('li');
      liTitle.innerHTML = "<h2>" + entry.title + "</h2>";
      console.log(liTitle)
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
  }
};

module.exports = UI;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map