const custo = 100;
const valorVenda = 150;

const custoTotal = custo + (custo * 0.2);
const lucro = valorVenda - custoTotal;

if (custo < 0 || valorVenda < 0) {
  console.log("Valor negativo");
}
else {
  console.log(lucro);
}