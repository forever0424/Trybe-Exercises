let n = 5;

for (let i = 1; i <= n; i++) {
  let colunas = "";
  for(let j = 0; j < i; j++) {
    colunas += "*";
  }
  console.log(colunas);
}