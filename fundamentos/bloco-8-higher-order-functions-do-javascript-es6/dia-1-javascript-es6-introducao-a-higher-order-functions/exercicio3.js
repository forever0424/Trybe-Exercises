const repeat = (rightAnswers, studentAnswers, action) => {
  let total = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    const sum = action(rightAnswers[i], studentAnswers[i]);
    total += sum;
  }
  return total;
};

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(repeat(rightAnswers, studentAnswers, (a, b) => {
  if (a === b) { return 1 }
  if (b === 'N.A') {return 0}
  else { return -0.5 };
}));
