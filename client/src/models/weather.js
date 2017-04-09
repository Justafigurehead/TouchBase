var Weather = function() {

};

Weather.prototype = {
  makeRequest: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },
  getWeather: function(callback) {
    this.makeRequest('http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/351581?res=daily&key=', function() {
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