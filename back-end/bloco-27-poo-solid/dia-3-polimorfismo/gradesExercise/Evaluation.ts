import Teacher from "./Teacher";

export default abstract class Evaluation {
  constructor(private _score: number, private _teacher: Teacher) {
    this.score = _score;
  }

  get score() { return this._score }

  set score(value: number) {
    if (value < 0) throw new Error('Pontuação não pode ser negativa');
    this._score = value;
  }

  get teacher() { return this._teacher }
}