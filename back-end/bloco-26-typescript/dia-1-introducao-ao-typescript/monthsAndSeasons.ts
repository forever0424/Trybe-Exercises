const readlineSync = require("readline-sync");

enum Months {
  JANUARY = "January",
  FEBRUARY = "February",
  MARCH = "March",
  APRIL = "April",
  MAY = "May",
  JUNE = "June",
  JULY = "July",
  AUGUST = "August",
  SEPTEMBER = "September",
  OCTOBER = "October",
  NOVEMBER = "November",
  DECEMBER = "December",
}

enum Seasons {
  SPRING = "Primavera",
  SUMMER = "Verão",
  FALL = "Outono",
  WINTER = "Inverno",
}

const seasonsSouth = {
  [Seasons.FALL]: [Months.MARCH, Months.APRIL, Months.MAY, Months.JUNE],
  [Seasons.WINTER]: [Months.JUNE, Months.JULY, Months.AUGUST, Months.SEPTEMBER],
  [Seasons.SPRING]: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER],
  [Seasons.SUMMER]: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY, Months.MARCH],
}

const seasonsNorth = {
  [Seasons.FALL]: seasonsSouth[Seasons.SPRING],
  [Seasons.WINTER]: seasonsSouth[Seasons.SUMMER],
  [Seasons.SPRING]: seasonsSouth[Seasons.FALL],
  [Seasons.SUMMER]: seasonsSouth[Seasons.WINTER],
}

const hemispheres = {
  North: seasonsNorth,
  South: seasonsSouth
}

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

getSeason()

