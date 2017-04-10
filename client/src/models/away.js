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
    this.makeRequest("http://localhost:3000/away",function(){
      if(this.status !== 200) return;
      var jsonString = this.responseText; 
      var results = JSON.parse(jsonString);
      var away = away.prototype.populateCountries(results);
      callback(away);

    });
    
  },


}
