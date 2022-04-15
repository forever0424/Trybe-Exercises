const readline = require('readline');
const fs = require('fs').promises;

function question(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();

      resolve(answer);
    });
  });
}

question('Qual arquivo deseja ler? ')
  .then((answer) => fs.readFile(answer, 'utf-8'))
  .then(async (result) => {
    const oldWord = await question('Qual palavra deseja substituir? ');
    const newWord = await question('E qual palavra deve ficar em seu lugar? ');
    const newContent = result.replace(new RegExp(oldWord, 'g'), newWord);
    console.log(newContent);
    const newFile = await question('Qual o nome do arquivo destino? ');
    fs.writeFile(`${newFile}.txt`, newContent)
  })
  .catch((e) => console.error(`Arquivo não encontrado, ${e}`));
