const readlineSync = require('readline-sync');

const fibonacci = (n) => {
  const array = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    array.push(array[i] + array[i + 1])
  }
  array.shift();
  return array
}

const realizaCalculo = () => {
  const n = readlineSync.questionInt('Informe o valor de n: ');

  if (n <= 0) {
    console.log('Digite um número maior que 0!')
    return;
  }

  console.log(`n: ${n}`);

  const resultado = fibonacci(n);

  console.log(`Resultado: ${resultado}`);
}

realizaCalculo();