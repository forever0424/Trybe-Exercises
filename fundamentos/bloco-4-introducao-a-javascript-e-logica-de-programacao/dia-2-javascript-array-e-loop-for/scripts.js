let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Exercício 1 */
for (let numero of numbers) {
  console.log(numero);
}

/* Exercício 2 */
let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}
console.log(soma);

/* Exercício 3 */
let media = soma / numbers.length;
console.log(media);

/* Exercício 4 */
if (media > 20) {
  console.log("valor maior que 20");
}
else {
  console.log("valor menor ou igual a 20")
}

/* Exercício 5 */
let maior = 0;
for (let num of numbers) {
  if (num > maior) {
    maior = num;
  }
}
console.log(maior);

/* Exercício 6 */
let impar = 0;
for (let n of numbers) {
  if (n % 2 !== 0) {
    impar += 1;
  }
}
if(impar === 0) {
  console.log("nenhum valor ímpar encontrado");
}
console.log(impar);

/* Exercício 7 */
let menor = numbers[0];
for (let numb of numbers) {
  if (numb < menor) {
    menor = numb;
  }
}
console.log(menor);

/* Exercício 8 */
let array = [];
for (let numeros = 1; numeros <= 25; numeros++) {
  array.push(numeros);
}
console.log(array);

/* Exercício 9 */
for (let i = 0; i < array.length; i++) {
  console.log(array[i] / 2);
}