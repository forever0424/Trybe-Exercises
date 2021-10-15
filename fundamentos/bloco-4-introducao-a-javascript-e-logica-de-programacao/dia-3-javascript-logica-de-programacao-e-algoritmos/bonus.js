let n = 7;
let impar = 0;

for (let s = 1; s <= n; s += 2) {
  if (s % 2 !== 0) {
    impar++;
  }
}

for (let i = 1; i <= n; i += 2) {
  let colunas = "";
  let espacos = "";
  let espacos2 = "";
  let colunas2 = "";
  impar--;
  for (let k = impar; k >= 1; k--) {
    espacos += " ";
  }
  for (let j = 1; j <= i; j++) {
    if (i === n) {
      colunas += "*";
    } else if (j === 1) {
      colunas += "*";
    } else if (j === i) {
      colunas2 += "*";
    } else {
      espacos2 += " ";
    }
  }
  console.log(espacos + colunas + espacos2 + colunas2);
}
