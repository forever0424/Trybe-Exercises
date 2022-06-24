import Exam from './Exam';
import Work from './Work';

export default class EvaluationResult {
  constructor(private _evaluation: Exam | Work, private _score: number) {
    this.evaluation = _evaluation;
    this.score = _score;
  }

  get evaluation(): Exam | Work {
    return this._evaluation;
  }

  set evaluation(value: Exam | Work) {
    this._evaluation = value;
  }

  get score(): number {
    return this._score;
  }

  validateValueThreshold(value: number, type: string, threshold: number) {
    if (this.evaluation.type === type && value > threshold) {
      throw new Error(`A pontução deve ser menor que ${threshold} pontos.`);
    }
  }

  set score(value: number) {
    if (value < 0) throw new Error('A pontução deve ser positiva.');
    this.validateValueThreshold(value, 'prova', 25);
    this.validateValueThreshold(value, 'trabalho', 50);
    this._score = value;
  }
}