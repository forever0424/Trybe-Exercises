import Teacher from './Teacher';
import Evaluation from './Evaluation';

export default class Exam extends Evaluation {
  constructor(score: number, teacher: Teacher, public type: string = 'prova') {
    super(score, teacher);
  }

  set score(value: number) {
    if (value > 25) {
      throw new Error('A pontução deve ser menor que 25 pontos.');
    }

    super.score = value;
  }
}