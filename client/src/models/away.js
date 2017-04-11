var Away = function(){

};

Away.prototype = {

  makeRequest: function(url,callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },
  all:function (callback) {
    this.makeRequest("https://restcountries.eu/rest/v2/all",function(){
      if(this.status !== 200) return;
      var jsonString = this.responseText; 
      var results = JSON.parse(jsonString);
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
>>>>>>> 78c8277e0e1402864605b8a760a9deb34a682bbf
