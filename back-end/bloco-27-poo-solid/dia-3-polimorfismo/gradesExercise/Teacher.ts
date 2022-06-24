import Subject from './Subject';
import Employee from './Employee';

export default class Teacher extends Employee {
  private _subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate, salary);

    this._subject = subject;
    this.enrollment = this.generateEnrollment();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}