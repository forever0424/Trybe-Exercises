const fatorial = n => n <= 1 ? 1 : n * fatorial(n - 1);

console.log(fatorial(5));

// const longestWord = str => {
//   const arr = str.split(' ')
//   let longest = '';
//   for (let i of arr) {
//     if (i.length > longest.length) {
//       longest = i;
//     }
//   }
//   return longest;
// }
const longestWord = str => str.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

const btn = document.getElementById('btn');
const clicks = document.getElementById('click-count');
let count = 0;
btn.addEventListener('click', () => clicks.innerText = count += 1);

const skills = ['HTML','CSS','JS','SF','JSON'];

function buildSkillsPhrase (paramOne) {
  const fun1 = paramInner => (
    `Tryber ${paramInner} aqui!

    Tudo bem?`
  );

  let result = `${fun1(paramOne)}
  Minhas cinco principais habilidades são:`;
  skills.sort().forEach(skill => 
  result = `${result}
  
  - ${skill}`);

  result = `
  ${result}
  
  #goTrybe
  `;
  return result;
}
console.log(buildSkillsPhrase('Bebeto'));
