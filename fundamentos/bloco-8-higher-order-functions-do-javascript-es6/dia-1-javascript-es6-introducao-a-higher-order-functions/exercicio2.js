const lottery = (number, callback) => {
  const n = Math.floor(Math.random() * 6);
  return callback(number, n);
};

const check = (number, n) => (number === n) ? "Parabéns você ganhou" : "Tente novamente";

console.log(lottery(3, check));
