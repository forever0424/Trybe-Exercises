const readlineSync = require('readline-sync');

const fatorial = (n) => {
  return [0, 1].includes(n)
    ? 1
    : n * fatorial(n - 1);
}

const realizaCalculo = () => {
  const n = readlineSync.questionInt('Informe o valor de n: ');

  if (n <= 0) {
    console.log('Digite um número maior que 0!')
    return;
  }

  console.log(`n: ${n}`);

  const resultado = fatorial(n);

  console.log(`Resultado: ${resultado}`);
}

realizaCalculo();