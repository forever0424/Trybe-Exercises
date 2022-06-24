import Enrollable from './Enrollable';
import Person from './Person';
import EvaluationResult from './EvaluationResult';

export default class Student extends Person implements Enrollable {
  private _enrollment = String();
  private _evaluationsResults: EvaluationResult[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
    this._evaluationsResults = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    }

    this._enrollment = value;
  }

  get evaluationsResults(): EvaluationResult[] {
    return this._evaluationsResults;
  }

  sumGrades(): number {
    return [...this._evaluationsResults]
      .reduce((previousNote, note) => note.score + previousNote, 0);
  }

  sumAverageGrades(): number {
    const sumGrades = this.sumGrades();
    const divider = this._evaluationsResults.length;

    return Math.round(sumGrades / divider);
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  addEvaluationResult(value: EvaluationResult): void {
    this._evaluationsResults.push(value);
  }
}