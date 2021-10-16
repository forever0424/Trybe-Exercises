/* 1º */
function algarismosRomanos(str) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let arr = str.split("");
  let newArr = [];
  let sum = 0;
  for (let i of arr) {
    for (let key in obj) {
      if (i === key) {
        newArr.push(obj[key]);
      }
    }
  }
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j] < newArr[j + 1]) {
      sum -= newArr[j];
    } else {
      sum += newArr[j];
    }
  }
  return sum;
}
console.log(algarismosRomanos("XIX"));

/* 2º */
function arrayOfNumbers(vector) {
  let arr = [];
  for (let i of vector) {
    for (let j = 0; j < i.length; j++) {
      if (i[j] % 2 === 0) {
        arr.push(i[j]);
      }
    }
  }
  return arr;
}

console.log(
  arrayOfNumbers([
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
  ])
);

/* 3º */
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
let obj = {};
for(let i of basket) {
  if(obj[i] === undefined) {
    obj[i] = 1;
  } else {
    obj[i]++;
  }
}
console.log(obj);
let txt = "Sua cesta possui ";
for (let key in obj) {
  txt += obj[key] + " " + key + "s, ";
}

let newTxt = txt.slice(0,-2) + ".";
console.log(newTxt);