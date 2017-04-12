var Away = require('../models/away');
var util = require('util')

var AwayUI = function() {
};

AwayUI.prototype = {

    countrySelected: function() {
        console.log("Country picked");
        var value = document.getElementById("away-dropdown").value;
        console.log("country: " + value);
        var country = new Away();
        country.getCountry(value, this.populateUl);

    },

    populateUl: function(countryInfo) {
    },

    render: function(away) {
        var dropdown = document.getElementById('away-dropdown');
        for (var country of away) {
            var option = document.createElement('option');
            option.innerText = country.name;
            dropdown.appendChild(option);

        };
        dropdown.addEventListener("change",
            function() {
                console.log("Country picked");
                var value = document.getElementById("away-dropdown").value;
                console.log("country: " + value);
                var country = new Away();
               
                country.getCountry(value, function(countryInfo) {
                    console.log("country info: " + countryInfo);
                    var results = JSON.parse(countryInfo);
                    console.log("results: " + util.inspect(results));
                    var div = document.getElementById('away');
                    var ul = document.createElement('ul');
                    ul.setAttribute("id", "awayUl");
                    var liName = document.createElement('li');
                    liName.setAttribute("id", "liName");
                    liName.innerText = results[0].name;
                    var liCap = document.createElement('li');
                    liCap.setAttribute("id", "liCap");
                    liCap.innerText = results[0].capital;
                    var liCurr = document.createElement('li');
                    liCurr.setAttribute("id", "liCurr");
                    liCurr.innerText = results[0].currencies[0].name;
                    var liLang = document.createElement('li');
                    liLang.setAttribute("id", "liLang");
                    liLang.innerText = results[0].languages[0].name;
                    ul.appendChild(liName);
                    ul.appendChild(liCap);
                    ul.appendChild(liCurr);
                    ul.appendChild(liLang);
                    div.appendChild(ul);
                });
            })
    },

    showCountries: function() {
        var away = new Away();
        away.all(this.render);
    }
}

module.exports = AwayUI;