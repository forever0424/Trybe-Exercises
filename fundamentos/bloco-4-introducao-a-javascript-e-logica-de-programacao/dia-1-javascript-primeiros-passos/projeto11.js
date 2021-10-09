let salarioBruto = 3000;
let parcela = 0;
let IR = 0;
let salarioBase = 0;

if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto - (salarioBruto * 0.08);
}
else if (salarioBruto <= 2594.92) {
  salarioBase = salarioBruto - (salarioBruto * 0.09);
}
else if (salarioBruto <= 5189.82) {
  salarioBase = salarioBruto - (salarioBruto * 0.11);
}
else {
  salarioBase = salarioBruto - 570.88;
}

if (salarioBase <= 1903.98) {
  IR = salarioBase;
}
else if (salarioBase <= 2.826,65) {
  IR = 0.075;
  parcela = 142.80;
}
else if (salarioBase <= 3.751,05) {
  IR = 0.15;
  parcela = 354.80;
}
else if (salarioBase <= 4.664,68) {
  IR = 0.225;
  parcela = 636.13;
}
else {
  IR = 0.275;
  parcela = 869.36;
}

let valorIR = (salarioBase * IR) - parcela;

salarioLiquido = salarioBase - valorIR;
console.log(salarioLiquido);