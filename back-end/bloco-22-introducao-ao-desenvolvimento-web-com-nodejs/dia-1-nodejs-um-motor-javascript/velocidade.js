const readlineSync = require('readline-sync');

const distancia = readlineSync.questionInt('Digite a distância ');

const tempo = readlineSync.questionInt('Digite o tempo ');

const velocidade = () => distancia / tempo;

console.log(velocidade())