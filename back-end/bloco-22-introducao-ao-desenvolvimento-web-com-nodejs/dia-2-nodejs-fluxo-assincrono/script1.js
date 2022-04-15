const readline = require('readline');
const fs = require('fs').promises;
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('Qual arquivo deseja ler? ', (answer) => {
  fs.readFile(answer, 'utf-8').then((result) => console.log(result)).catch((e) => console.error(e));
});
