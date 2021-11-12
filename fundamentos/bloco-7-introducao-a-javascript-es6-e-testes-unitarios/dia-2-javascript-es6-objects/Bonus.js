const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite',
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  },
};

const stdnsInClass = (obj, subject) => {
  let count = 0;
  for (let i in obj) {
    for (let j in obj[i]) {
      if(obj[i][j] === subject) {
        count += obj[i].numeroEstudantes;
      }
    }
  }
  return count;
}
console.log(stdnsInClass(allLessons, 'Matemática'));

const createReport = (obj, prof) => {
  let stdnts = 0;
  let classes = [];
  for (let i in obj) {
    for (let j in obj[i]) {
      if(obj[i][j] === prof) {
        stdnts += obj[i].numeroEstudantes;
        classes.push(obj[i].materia);
      }
    }
  }
  return {
    professor: prof,
    aulas: classes,
    estudantes: stdnts
  };
}
console.log(createReport(allLessons, 'Maria Clara'));