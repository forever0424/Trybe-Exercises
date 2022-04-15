const readlineSync = require('readline-sync');


const sorteio = () => {
  const adivinhacao = readlineSync.questionInt('Adivinhe um numero ');

  const numeroGerado = Math.floor(Math.random() * 11);

  if (adivinhacao === numeroGerado) console.log("Parabéns, número correto!");

  console.log(`Opa, não foi dessa vez. O número era ${numeroGerado}`);

  readlineSync.keyInYN('Quer jogar de novo? ') ? sorteio() : null;
}

sorteio();

module.exports = () => sorteio;