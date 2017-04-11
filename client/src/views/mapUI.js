var MapWrapper = require('../models/map');
var GeoCoder = require('../models/geoCoder');

var MapUI = function() {

};

MapUI.prototype = {
  displayMap: function() {
    var container = document.getElementById('home-map');
    var center = {
      lat: 55.8,
      lng: -4
    };
    var zoom = 10;
    var mainMap = new MapWrapper(container, center, zoom);

    mainMap.addMarker(center);
  },
  var handleBtnClick = function(mainMap){
    var input = document.querySelector('#address');
    var address = input.value;

    var gc = new GeoCoder(address, mainMap);
    gc.geoCode();
  }
};

module.exports = MapUI;