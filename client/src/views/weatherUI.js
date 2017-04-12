var Weather = require('../models/weather');

var WeatherUI = function(){

}

WeatherUI.prototype = {
  weatherRender: function(weather){
    var container = document.getElementById('weatherInfo');

    var div = document.createElement('div');

    var ul = document.createElement('ul');

    var liName = document.createElement('li');
    liName.innerHTML = "<p> City Name: " + weather.name + "</p>";

    var liTemp = document.createElement('li');
    liTemp.innerHTML = "<p> Temperature: " + weather.main.temp + " &#8451</p>"

    var liWeatherDescription = document.createElement('li');
    liWeatherDescription.innerHTML = "<p>Description: " + weather.weather[0].description + "</p>"

    var imgIcon = document.createElement('img');
    imgIcon.src = 'http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png';


    ul.appendChild(liName);
    ul.appendChild(liTemp);
    ul.appendChild(liWeatherDescription);
    ul.appendChild(imgIcon);
    div.appendChild(ul);

    container.appendChild(div);

    console.log(container);

  },
  showAllWeather: function(){
    var weather = new Weather();
    weather.getWeather(function(result){
      this.weatherRender(result);
    }.bind(this));
  }
};

module.exports = WeatherUI;