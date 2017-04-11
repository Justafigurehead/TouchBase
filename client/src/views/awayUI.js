var Away = require('../models/away');

var AwayUI = function(){

};

AwayUI.prototype = {
  render: function(away){
    var dropdown = document.getElementById('away-dropdown');
    for( var country of away){
      var option = document.createElement('option');
      option.innerText = country.name;
      dropdown.appendChild(option);

    };
    dropdown.addEventListener("change", function () {
      var value = document.getElementById("away-dropdown").value;
      var country = new Away();
      country.all(value, this.populateUl);
    });

  },


  populateUl: function(countryInfo){v
    var div = document.getElementById('away');
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
    div.appendChild(ul);
  },
  showCountries:function(){   
    var away = new Away();
    away.all(function(result){
      this.render(result);
    })
  }
}

module.exports = AwayUI;