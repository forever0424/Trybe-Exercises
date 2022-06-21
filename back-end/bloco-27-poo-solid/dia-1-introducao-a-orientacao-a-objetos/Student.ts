class StudentSubject {
  registration: string;
  name: string;
  testsGrades: [number, number, number, number];
  projectsGrades: [number, number];

  constructor(registration: string, name: string, 
    testsGrades: [number, number, number, number], projectsGrades: [number, number]) {
    this.registration = registration;
    this.name = name;
    this.testsGrades = testsGrades;
    this.projectsGrades = projectsGrades;
  }

  gradesSum = () => [...this.testsGrades, ...this.projectsGrades]
    .reduce((acc, grade) => acc + grade)

  gradesAverage = () => (this.gradesSum() / 6).toFixed(1);
}

const maria = new StudentSubject('123jkl', 'Maria', [5, 6, 9, 4], [8, 8])
console.log(maria.gradesSum());
console.log(maria.gradesAverage());
