"use strict";
exports.__esModule = true;
var APIService_1 = require("./ts/APIService");
var api = new APIService_1.APIService();
api.getCovidData().then(function (data) {
    var keys = Object.keys(data[0]);
    var topRow = document.createElement('tr');
    var table = document.getElementById('table');
    table.appendChild(topRow);
    keys.forEach(function (key) {
        var th = document.createElement('th');
        th.textContent = key;
        topRow.appendChild(th);
    });
    data.forEach(function (element) {
        var keys = Object.keys(element);
        var row = document.createElement('tr');
        keys.forEach(function (key) {
            var td = document.createElement('td');
            td.textContent = element[key];
            row.appendChild(td);
        });
        table.appendChild(row);
    });
});

var search_bar=document.getElementById("search_bar");
