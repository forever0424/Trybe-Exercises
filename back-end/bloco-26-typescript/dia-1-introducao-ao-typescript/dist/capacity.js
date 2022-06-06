"use strict";
const readlineCapacity = require('readline-sync');
const capacityUnits = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
function convertCapacity(value, baseUnit, convertTo) {
    const fromIndex = capacityUnits.indexOf(baseUnit);
    const toIndex = capacityUnits.indexOf(convertTo);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
function execCapacity() {
    const value = readlineCapacity.questionFloat("Input a value: ");
    const baseUnit = readlineCapacity.keyInSelect(capacityUnits, "Choose a unit to convert from");
    const convertTo = readlineCapacity.keyInSelect(capacityUnits, "Choose a unit to convert to");
    const answer = convertCapacity(value, capacityUnits[baseUnit], capacityUnits[convertTo]);
    console.log(`Value converted: ${answer}${capacityUnits[convertTo]}`);
}
execCapacity();
