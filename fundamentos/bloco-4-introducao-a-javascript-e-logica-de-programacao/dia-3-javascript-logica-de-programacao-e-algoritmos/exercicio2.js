let n = 5;
let colunas = "";
for (let i = 1; i <= n; i++) {
  for(let j = 0; j < i; j++) {
    colunas += "*";
  }
  console.log(colunas);
  colunas = "";
}