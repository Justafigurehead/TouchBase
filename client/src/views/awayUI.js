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
  
})
}


}