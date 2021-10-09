let nota = '85%';

if (parseInt(nota) < 0 || parseInt(nota) > 100) {
  console.log("Nota inexistente");
}
else if (parseInt(nota) >= 90) {
  console.log("A");
}
else if (parseInt(nota) >= 80) {
  console.log("B");
}
else if (parseInt(nota) >= 70) {
  console.log("C");
}
else if (parseInt(nota) >= 60) {
  console.log("D");
}
else if (parseInt(nota) >= 50) {
  console.log("E");
}
else {
  console.log("F");
}