const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = arrays.reduce((array, value) => array.concat(value), []);

console.log(flatten);

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const arrayOfA = names.reduce((total, value) => total += value.toLowerCase().split('').filter((string) => string === 'a'), '');
  const withoutCommas = arrayOfA.replace(/,/g, '');
  return withoutCommas.length;
}

console.log(containsA());

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((name, index) => ({
    name,
    average: grades[index].reduce((acc, grade) => acc + grade) / grades[index].length
  }));
};

console.log(studentAverage());
