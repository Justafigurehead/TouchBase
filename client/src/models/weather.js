var Key = require('../../../key');

var Weather = function() {

var weatherKey = new Key();

};

Weather.prototype = {
  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },
  getWeather: function(callback) {
    var url = ('api.openweathermap.org/data/2.5/weather?q=Glasgow&APPID=' + weatherKey)
    this.makeRequest(url, function() {
      if(this.status !== 200)
        return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);
      
      var weather = Weather.prototype.populateWeather(results);
      callback(weather);
    });
  }
}

module.exports = Weather;