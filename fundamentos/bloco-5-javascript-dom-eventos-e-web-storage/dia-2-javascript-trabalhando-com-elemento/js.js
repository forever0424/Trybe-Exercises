console.log(document.querySelector('#elementoOndeVoceEsta').parentNode.style.color='red');
console.log(document.querySelector('#elementoOndeVoceEsta').firstElementChild.innerText='txtadd');
console.log(document.querySelector('#pai').firstElementChild);
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);
console.log(document.querySelector('#pai').lastElementChild.previousElementSibling);
let irmao = document.createElement('div')
// document.querySelector('#pai').push(irmao);
// document.appendChild(irmao);
document.querySelector('#pai').appendChild(irmao);
console.log(document.querySelector('#pai'));
let filho = document.createElement('div');
filho.setAttribute('id','div3');
document.querySelector('#elementoOndeVoceEsta').appendChild(irmao);
document.querySelector('#primeiroFilhoDoFilho').appendChild(filho);
console.log(document.querySelector('#div3').parentElement.parentElement.nextElementSibling);
console.log(document.getElementById('pai').childNodes);
let main = document.querySelector('#paiDoPai');
let childs = document.querySelector('#paiDoPai').children;
for (let i of childs) {
  console.log(main.removeChild(i));
}