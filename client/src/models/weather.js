var Weather = function() {

};

Weather.prototype = {
  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  }

}

module.exports = Weather;