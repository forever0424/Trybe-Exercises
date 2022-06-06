"use strict";
const readlines = require('readline-sync');
var Scripts;
(function (Scripts) {
    Scripts["LENGTH"] = "length";
    Scripts["MASS"] = "mass";
    Scripts["AREA"] = "area";
    Scripts["VOLUME"] = "volume";
    Scripts["CAPACITY"] = "capacity";
})(Scripts || (Scripts = {}));
const scriptToRun = readlines
    .keyInSelect(Object.keys(Scripts), "Which convertion do you want to make?");
require(`./${Object.values(Scripts)[scriptToRun]}`);
