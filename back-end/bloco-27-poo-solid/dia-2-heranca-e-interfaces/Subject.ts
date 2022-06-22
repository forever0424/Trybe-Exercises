export default class Subject {
  constructor(private _name: string) {
    this.name = _name
  }

  get name() { return this._name }

  set name(value: string) {
    if (value.length < 3) throw new Error('O nome deve possuir pelo menos 3 caracteres');
    this._name = value;
  }
}

const math = new Subject('Matemática');
const story = new Subject('História');
const philosophy = new Subject('Filosofia');

console.log(math);
console.log(story);
console.log(philosophy);

// error
// const invalidSubjectName = new Subject('Po');