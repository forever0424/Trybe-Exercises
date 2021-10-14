let n = 5;
let colunas = "";
for (let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    colunas += "*";
  }
  console.log(colunas);
  colunas = "";
}