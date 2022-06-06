const readlines = require('readline-sync');

enum Scripts {
  LENGTH = 'length',
  MASS = 'mass',
  AREA = 'area',
  VOLUME = 'volume',
  CAPACITY = 'capacity'
}
  

const scriptToRun = readlines
  .keyInSelect(Object.keys(Scripts), "Which convertion do you want to make?");

require(`./${Object.values(Scripts)[scriptToRun]}`)