var GeoCoder = function(address, mapWrapper){
  this.address = address;
  this.mapWrapper = mapWrapper;
};

GeoCoder.prototype = {
  geoCode: function(){
    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.address;
    var geoCoderThis = this;

    this.makeRequest(url, function(){
      var resultsObj = JSON.parse(this.responseText);

      var coords = resultsObj.results[0].geometry.location;
      geoCoderThis.mapWrapper.googleMap.setCenter(coords);
      console.log(coords);
      geoCoderThis.mapWrapper.addMarker(coords);
    });
  }, 
  makeRequest: function(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.onload = callback;
    xhr.open("GET", url);
    xhr.send();
  }
};

module.exports = GeoCoder;