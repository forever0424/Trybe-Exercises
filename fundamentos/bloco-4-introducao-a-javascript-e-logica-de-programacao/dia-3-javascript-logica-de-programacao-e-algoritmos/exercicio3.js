let n = 5;
let colunas = "";
let espacos = "";

for (let i = 1; i <= n; i++) {
  for (let k = 1; k <= n - i; k++) {
    espacos += " ";
  }
  for (let j = 0; j < i; j++) {
    colunas += "*";
  }
  console.log(espacos + colunas);
  colunas = "";
  espacos = "";
}
