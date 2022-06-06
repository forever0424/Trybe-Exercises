const readlineVolume = require('readline-sync');
const volumeUnits = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function convertVolume(value: number, baseUnit: string, convertTo: string): number {
  const fromIndex = volumeUnits.indexOf(baseUnit);
  const toIndex = volumeUnits.indexOf(convertTo);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(1000, exponent);
}

function execVolume(): void {
  const value = readlineVolume.questionFloat("Input a value: ");
  const baseUnit = readlineVolume.keyInSelect(volumeUnits, "Choose a unit to convert from");
  const convertTo = readlineVolume.keyInSelect(volumeUnits, "Choose a unit to convert to");
  const answer = convertVolume(value, volumeUnits[baseUnit], volumeUnits[convertTo]);
  console.log(`Value converted: ${answer}${volumeUnits[convertTo]}`);
}

execVolume();