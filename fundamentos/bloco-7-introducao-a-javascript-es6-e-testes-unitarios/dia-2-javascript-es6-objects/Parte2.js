const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const add = (obj, key, value) => obj[key] = value;
add(lesson2, 'turno', 'noite');
console.log(lesson2);

console.log(Object.keys(lesson1));
console.log(Object.keys(lesson3).length);
console.log(Object.values(lesson2))

const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
console.log(allLessons);
console.log(lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes)

const getValueByNumber = (obj, n) => Object.values(obj)[n];
console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => {
  for (let i in obj) {
    if (i.includes(key) && obj[i].includes(value)) {
      return true;
    }
  }
  return false;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
