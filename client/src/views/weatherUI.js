var Weather = require('../models/weather');

var WeatherUI = function(){

};

WeatherUI.prototype = {
  weatherRender: function(weather){
    var container = document.getElementById('weatherInfo');

    var div = document.createElement('div');



    var ul = document.createElement('ul');

    var liName = document.createElement('li');
    liName.innerHTML = "<p>" + weather.name + "</p>";

    var liTemp = document.createElement('li');
    liTemp.innerHTML = "<p>" + weather.main.temp + "</p>"

    var liWeatherDescription = document.createElement('li');
    liWeatherDescription.innerHTML = "<p>" + weather.weather.description + "</p>"

    var imgIcon = document.createElement('img');
    imgIcon.src = weather.weather.icon;


    




  };
}