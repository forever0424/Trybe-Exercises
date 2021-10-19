let titulos = document.getElementsByTagName('h3');
for (let i = 0; i < titulos.length; i += 1) {
  if (i === 0 || i === 1) {
    titulos[i].style.backgroundColor = '#b40cb4';
    titulos[i].style.color = 'white';
  } else {
    titulos[i].style.backgroundColor = 'black';
    titulos[i].style.color = 'white';
  }
}
let background = document.getElementsByClassName('emergency-tasks');
let background2 = document.getElementsByClassName('no-emergency-tasks');
for (let i of background) {
  i.style.backgroundColor = 'salmon';
}
for (let i of background2) {
  i.style.backgroundColor = 'gold';
}
document.getElementById('header-container').style.backgroundColor = 'lightgreen';
document.getElementById('header-container').style.color = 'white';
document.getElementById('footer-container').style.backgroundColor = 'darkgreen';
document.getElementById('footer-container').style.color = 'white';