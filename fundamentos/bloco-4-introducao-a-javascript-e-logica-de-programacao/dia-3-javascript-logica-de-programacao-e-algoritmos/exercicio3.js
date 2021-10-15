let n = 5;

for (let i = 1; i <= n; i++) {
  let colunas = "";
  let espacos = "";
  for (let k = 1; k <= n - i; k++) {
    espacos += " ";
  }
  for (let j = 0; j < i; j++) {
    colunas += "*";
  }
  console.log(espacos + colunas);
}
