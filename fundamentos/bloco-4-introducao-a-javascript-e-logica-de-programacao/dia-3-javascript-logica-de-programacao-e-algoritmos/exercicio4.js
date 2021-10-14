let n = 5;
let colunas = "";
let espacos = "";
let impar = 0;

for (let s = 1; s <= n; s += 2) {
  if (s % 2 !== 0) {
    impar++;
  }
}

for (let i = 1; i <= n; i += 2) {
  impar--
  for (let k = impar; k >= 1; k--) {
    espacos += " ";
  }
  for (let j = 0; j < i; j++) {
    colunas += "*";
  }
  console.log(espacos + colunas);
  colunas = "";
  espacos = "";
}
