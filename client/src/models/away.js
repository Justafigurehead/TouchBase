var Away = function(){
};
Away.prototype = {
  makeRequest: function(url, callback, onComplete){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      onComplete(request, callback)
    };
    request.send();
  },
  
  requestDone: function(response, callback) {
    console.log("Request Done callback fired");
    console.log("Response status: " + response.status);
    if (response.status !== 200) return;
    console.log("Status was 200");
    var jsonString = response.responseText;
    var results = JSON.parse(jsonString);
    var countryInfo = results[0];
    console.log(jsonString);
    console.log(results);
    console.log(countryInfo);
    console.log(away);
    callback(results);
    },

    all: function(callback) {
        console.log("away get all called");
        var url = "https://restcountries.eu/rest/v2/all";
        this.makeRequest(url, callback, this.requestDone);

    },
    
    gotCountryInfo: function(response, callback) {
      console.log("gotCountryInfo callback fired");
      console.log("Response status: " + response.status);
      if (response.status !== 200) return;
      console.log("Status was 200");
      var jsonString = response.responseText;
      callback(jsonString);
    },
    
    getCountry: function(country, callback) {
      console.log("The callback: " + callback);
      var url = "https://restcountries.eu/rest/v2/name/" + country;
      this.makeRequest(url, callback, this.gotCountryInfo);
    },
    
  createCountriesArray: function(results){
    var countries = [];
    for(var results of results){
      var name = result.name;
      countries.push(name);
    };
    return countries;
  }
}
module.exports = Away;

