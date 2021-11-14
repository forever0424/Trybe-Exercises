function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
};

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
};

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(str) {
  let obj = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let i = 0; i < str.length; i += 1) {
    for (let key in obj) {
      if (str[i] === key) {
        str = str.replace(str[i], obj[key]);
      }
    }
  }
  return str;
};

function decode(str) {
  let obj = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let i = 0; i < str.length; i += 1) {
    for (let key in obj) {
      if (str[i] === key) {
        str = str.replace(str[i], obj[key]);
      }
    }
  }
  return str;
};

function techList(arr, name) {
  if (arr.length === 0) {
    return 'Vazio!';
  }
  arr.sort();
  let list = [];
  for (let i of arr) {
    let obj = {};
    if (obj[i] === undefined) {
      obj.tech = i;
      obj.name = name;
    }
    list.push(obj);
  }
  return list;
};

function hydrate(str) {
  let x = /\d+/g;
  /** Source: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript */
  let n = str.match(x);
  let sum = 0;
  for (let i of n) {
    sum += parseInt(i, 10);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
};

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const searchEmployee = (id, detail) => {
  const infoArr = [];
  let check = false;
  for (let i of professionalBoard) {
    if (i.id === id) {
      check = true;
      for (let j of detail) {
        if (i[j] === undefined) {
          throw Error ('Informação indisponível');
        }
        infoArr.push(i[j]);
      }
    }
  }
  if (check === false) {
    throw Error ('ID não identificada');
  }
  
  return infoArr;
};

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee };