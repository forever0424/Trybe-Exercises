const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
let array = [firstLi,secondLi,thirdLi];

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function addClass(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.className = 'tech';
  for (let i of array) {
    if(event.target !== i){
      i.className = '';
    }
  }
  // if(event.target !== firstLi) {
  //   firstLi.className = '';
  // } if(event.target !== secondLi) {
  //   secondLi.className = '';
  // } if(event.target !== thirdLi) {
  //   thirdLi.className = '';
  // }
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}
function lists(element) {
  element.addEventListener('click', addClass);
}
lists(firstLi);
lists(secondLi);
lists(thirdLi);
// firstLi.addEventListener('click', addClass);
// secondLi.addEventListener('click', addClass);
// thirdLi.addEventListener('click', addClass);
function changeText() {
  for (let i of array) {
    if (i.className === 'tech') {
      let text = input.value;
      i.innerHTML = text;
    }
  }
  // if (firstLi.className === 'tech') {
  //   let x = input.value;
  //   firstLi.innerHTML = x;
  // }
  // if (secondLi.className === 'tech') {
  //   let x = input.value;
  //   secondLi.innerHTML = x;
  // }
  // if (thirdLi.className === 'tech') {
  //   let x = input.value;
  //   thirdLi.innerHTML = x;
  // }
}
input.addEventListener('keyup', changeText);

myWebpage.addEventListener('dblclick', function() {
  window.open('https://github.com/RafaelCunhaS');
})

myWebpage.addEventListener('mouseover', function(e) {
  e.target.style.color = 'red';
})

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.