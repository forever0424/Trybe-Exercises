"use strict";
const readlineSync = require("readline-sync");
var Months;
(function (Months) {
    Months["JANUARY"] = "January";
    Months["FEBRUARY"] = "February";
    Months["MARCH"] = "March";
    Months["APRIL"] = "April";
    Months["MAY"] = "May";
    Months["JUNE"] = "June";
    Months["JULY"] = "July";
    Months["AUGUST"] = "August";
    Months["SEPTEMBER"] = "September";
    Months["OCTOBER"] = "October";
    Months["NOVEMBER"] = "November";
    Months["DECEMBER"] = "December";
})(Months || (Months = {}));
var Seasons;
(function (Seasons) {
    Seasons["SPRING"] = "Primavera";
    Seasons["SUMMER"] = "Ver\u00E3o";
    Seasons["FALL"] = "Outono";
    Seasons["WINTER"] = "Inverno";
})(Seasons || (Seasons = {}));
const seasonsSouth = {
    [Seasons.FALL]: [Months.MARCH, Months.APRIL, Months.MAY, Months.JUNE],
    [Seasons.WINTER]: [Months.JUNE, Months.JULY, Months.AUGUST, Months.SEPTEMBER],
    [Seasons.SPRING]: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER],
    [Seasons.SUMMER]: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY, Months.MARCH],
};
const seasonsNorth = {
    [Seasons.FALL]: seasonsSouth[Seasons.SPRING],
    [Seasons.WINTER]: seasonsSouth[Seasons.SUMMER],
    [Seasons.SPRING]: seasonsSouth[Seasons.FALL],
    [Seasons.SUMMER]: seasonsSouth[Seasons.WINTER],
};
const hemispheres = {
    North: seasonsNorth,
    South: seasonsSouth
};
const getSeason = () => {
    const monthIndex = readlineSync.keyInSelect(Object.values(Months), "Which month?");
    const hemisphereIndex = readlineSync.keyInSelect(Object.keys(hemispheres), "On which hemisphere");
    const chosenMonth = Object.values(Months)[monthIndex];
    console.log(Object.values(Months)[monthIndex]);
    console.log(Object.keys(hemispheres)[hemisphereIndex]);
    const chosenHemisphere = Object.values(hemispheres)[hemisphereIndex];
    Object.entries(chosenHemisphere).forEach((entry) => {
        const season = entry[0];
        const month = entry[1];
        if (month.includes(chosenMonth))
            console.log(season);
    });
};
getSeason();
