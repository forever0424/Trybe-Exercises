"use strict";
const readlineMass = require('readline-sync');
const massUnits = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function convertMass(value, baseUnit, convertTo) {
    const fromIndex = massUnits.indexOf(baseUnit);
    const toIndex = massUnits.indexOf(convertTo);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
function execMass() {
    const value = readlineMass.questionFloat("Input a value: ");
    const baseUnit = readlineMass.keyInSelect(massUnits, "Choose a unit to convert from");
    const convertTo = readlineMass.keyInSelect(massUnits, "Choose a unit to convert to");
    const answer = convertMass(value, massUnits[baseUnit], massUnits[convertTo]);
    console.log(`Value converted: ${answer}${massUnits[convertTo]}`);
}
execMass();
