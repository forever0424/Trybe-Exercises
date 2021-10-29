function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
/* Exercicio 1 */
function decDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  const DaysList = document.getElementById('days');

  for (let i of dezDaysList) {
    const dayListItem = document.createElement('li')
    dayListItem.className = 'day';
    dayListItem.innerHTML = i;
    if (i === 24 || i === 25 || i === 31) {
      dayListItem.className += ' holiday';
    }
    if (i === 4 || i === 11 || i === 18 || i === 25) {
      dayListItem.className += ' friday';
    }

    DaysList.appendChild(dayListItem);
  }
}

decDays();
/* Exercicio 2 */
const botao = document.querySelector('.buttons-container');
function button(text, id) {
  const btn = document.createElement('button');
  btn.innerHTML = text;
  btn.id = id;

  botao.appendChild(btn);
}

button('Feriados', 'btn-holiday');
/* Exercicio 3 */
const dias = document.getElementsByClassName('holiday');
const btnHoliday = document.getElementById('btn-holiday');
btnHoliday.addEventListener('click', function() {
  if (dias[0].style.backgroundColor === '') {
    for (let i of dias){
      i.style.backgroundColor = 'green';
    }
  } else {
      for (let i of dias) {
        i.style.backgroundColor = '';
      }
  }
})
/* Execico 4 */
button('Sexta-feira', 'btn-friday');
/* Exercicio 5 */
const sextas = document.getElementsByClassName('friday');
const btnFriday = document.getElementById('btn-friday');
btnFriday.addEventListener('click', function() {
  if (sextas[0].textContent.length === (1 || 2)) {
    for (let i of sextas){
      i.textContent += ' Sexta';
    }
  } else {
      for (let i of sextas) {
        let str = i.textContent.replace(' Sexta','');
        i.textContent = str;
      }
  }
})
/* Exercicio 6 */
const days = document.getElementById('days');
days.addEventListener('mouseover', function(e){
  if (e.target.tagName === 'LI'){
    e.target.style.fontSize = '21px';
  }
})
days.addEventListener('mouseout', function(e){
  e.target.style.fontSize = '16px';
})
/* Exercicio 7 */
const tsk = document.querySelector('.my-tasks');
function tasks(str) {
  const newTask = document.createElement('span');
  newTask.innerHTML = str;

  tsk.appendChild(newTask);
}
tasks('cozinhar');
/* Exercicio 8 */
function taskColor(cor) {
  const newTaskColor = document.createElement('div');
  newTaskColor.style.border = '5px solid ' + cor;
  newTaskColor.style.float = 'left';
  newTaskColor.style.margin = '4px 7px';
  newTaskColor.style.backgroundColor = cor;
  newTaskColor.className = 'task';

  tsk.appendChild(newTaskColor);
}
taskColor('red');
/* Exercicio 9 */
tsk.addEventListener('click', function(e){
  if (e.target.className === 'task') {
    e.target.className = 'task-selected';
    console.log(e.target)
    console.log(dayColor.style.backgroundColor)
  } else if (e.target.className === 'task-selected') {
    e.target.className = 'task';
  }
})
/* Exercicio 10 */
const dayColor = document.querySelector('.task-selected');
days.addEventListener('click', function(e){
  if (e.target.tagName === 'LI') {
    e.target.style.color = dayColor;
    console.log(dayColor);
  }
})
/* BONUS */
const add = document.getElementById('btn-add');
const lista = document.querySelector('.task-list');
const conteudo = document.getElementById('task-input');
function botaoComp(){
  if (conteudo.value === '') {
    alert ('ERRO!!');
  } else {
    const listaComp = document.createElement('li');
    listaComp.innerText = conteudo.value;

    lista.appendChild(listaComp);
  }
}
add.addEventListener('click', botaoComp)
conteudo.addEventListener('keydown', function(e){
  if (e.key === 'Enter') {
    botaoComp();
  }
})