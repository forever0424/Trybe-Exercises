/* Primo ou não */
n = 113;
let primo = true;

for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    primo = false;
    break;
  }
}

if (primo && n !== 1 && n !== 0) {
  console.log('É primo.');
} else {
  console.log('Não é primo.')
}