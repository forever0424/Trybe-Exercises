const backColor = document.getElementById('backColor');
const main = document.getElementById('main');
backColor.addEventListener('change', function(e) {
  main.style.backgroundColor = e.target.value;
})
const txtColor = document.getElementById('txtColor');
txtColor.addEventListener('change', function(e) {
  main.style.color = e.target.value;
})
const fontSize = document.getElementById('txtSize');
fontSize.addEventListener('change', function(e) {
  main.style.fontSize = e.target.value + 'px';
})
const spacing = document.getElementById('spacing');
spacing.addEventListener('change', function(e) {
  main.style.lineHeight = e.target.value + 'px';
})
const fontFamily = document.getElementById('font');
fontFamily.addEventListener('click', (e) => {
  main.style.fontFamily = e.target.value
})