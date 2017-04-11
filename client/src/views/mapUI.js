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
  }
};

module.exports = MapUI;