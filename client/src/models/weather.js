var Key = require('../../../../key');

var Weather = function() {

   this.weatherKey = new Key();
};

Weather.prototype = {
  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },
  getWeather: function(callback) {
    console.log(this.weatherKey.key);
    var url = ('http://api.openweathermap.org/data/2.5/weather?q=Glasgow,uk&units=metric&APPID=' + this.weatherKey.key)
    this.makeRequest(url, function() {
      if(this.status !== 200)
        return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);
      console.log(results);
      callback(results);
    });
  }
}

module.exports = Weather;