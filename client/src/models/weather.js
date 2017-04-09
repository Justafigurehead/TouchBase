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
    this.makeRequest('http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/351581?res=daily&key=5ef36695-12a4-4ae8-8f3c-b7f96080cb5e', function() {
      if(this.status !== 200)
        return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);
      console.log(results);
    });
  }
}

module.exports = Weather;