var Away = require('../models/away');

var AwayUI = function(){

}

AwayUI.prototype = {
render: function(away){
  var dropdown = document.getElementById('away-dropdown');
  for( var countries of away){
    var option = document.createElement('option');
    option.innerText = name;
    dropdown.appendChild(option);

  }
dropdown.addEventListener("change", function () {
  var value = document.getElementById("away-dropdown").value;
  var country = new Away();
  country.selectedCountry(value, this.populateUl);

});

},

populateUl: function(countryInfo){
  var ul = document.createElement('ul');
  var liName = document.createElement('li');
  liName.innerText = countryInfo.name;
  var liCap = document.createElement('li');
  liName.innerText = countryInfo.capital;
  var liCurr = document.createElement('li');
  liCurr.innerText = countryInfo.currencies.name;
  var liLang = document.createElement('li');
  liLang.innerText = countryInfo.languages.name;  
  ul.appendChild(liName);
  ul.appendChild(liCap);
  ul.appendChild(liCurr);
  ul.appendChild(liLang);
}
}

module.exports = AwayUI;