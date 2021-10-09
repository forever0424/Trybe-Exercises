const ang1 = 35;
const ang2 = 75;
const ang3 = 90;

if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
  console.log("Ângulo inválido");
}
else if ((ang1 + ang2 + ang3) === 180) {
  console.log(true);
}
else {
  console.log(false);
}