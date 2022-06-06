const readlineArea = require('readline-sync');
const areaUnits = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

function convertArea(value: number, baseUnit: string, convertTo: string): number {
  const fromIndex = areaUnits.indexOf(baseUnit);
  const toIndex = areaUnits.indexOf(convertTo);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(100, exponent);
}

function execArea(): void {
  const value = readlineArea.questionFloat("Input a value: ");
  const baseUnit = readlineArea.keyInSelect(areaUnits, "Choose a unit to convert from");
  const convertTo = readlineArea.keyInSelect(areaUnits, "Choose a unit to convert to");
  const answer = convertArea(value, areaUnits[baseUnit], areaUnits[convertTo]);
  console.log(`Value converted: ${answer}${areaUnits[convertTo]}`);
}

execArea();