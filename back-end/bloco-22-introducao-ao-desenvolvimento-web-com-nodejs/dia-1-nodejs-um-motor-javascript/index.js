const readlineSync = require('readline-sync');

const opcoes = [
'Calcular IMC',
'Calcular velocidade média',
'Jogo de adivinhação',
'Calcular fatorial'
];

const index = readlineSync.keyInSelect(opcoes, 'Rodar qual script? ');

const scripts = ['./imc.js', './velocidade.js', './sorteio.js', './fatorial.js'];

if (index > 0) require(scripts[index]);