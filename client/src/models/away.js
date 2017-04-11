var Away = function(){

};

Away.prototype = {

  makeRequest: function(url,callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },
  all:function (selected, callback) {
    var url = "https://restcountries.eu/rest/v2/" + selected;

    this.makeRequest(url,function(){
      if(this.status !== 200) return;
      var jsonString = this.responseText; 
      var results = JSON.parse(jsonString);
      var countryInfo = results[0];
      var away = away.prototype.createCountriesArray(results);
      callback(away);
    });
    
  },

  createCountriesArray: function(results){
    var countries = [];
    for(var results of results){
      var name = result.name;
      countries.push(name);

    }

    return countries;
  }

}

module.exports = Away;
