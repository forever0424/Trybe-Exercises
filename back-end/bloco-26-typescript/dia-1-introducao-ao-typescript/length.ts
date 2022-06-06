const readlineLength = require('readline-sync');
const lengthUnits = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convertLength(value: number, baseUnit: string, convertTo: string): number {
  const fromIndex = lengthUnits.indexOf(baseUnit);
  const toIndex = lengthUnits.indexOf(convertTo);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent);
}

function execLength(): void {
  const value = readlineLength.questionFloat("Input a value: ");
  const baseUnit = readlineLength.keyInSelect(lengthUnits, "Choose a unit to convert from");
  const convertTo = readlineLength.keyInSelect(lengthUnits, "Choose a unit to convert to");
  const answer = convertLength(value, lengthUnits[baseUnit], lengthUnits[convertTo]);
  console.log(`Value converted: ${answer}${lengthUnits[convertTo]}`);
}

execLength();