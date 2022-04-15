const fizzBuzz = (x) => {
  const promise = new Promise((resolve, reject) => {
    if (x <= 0 || !Number.isInteger(x)) reject(new Error('Apenas números inteiros maiores que zero.'))
    let result = '';
    switch (true) {
      case (x % 5 === 0 && x % 3 === 0):
        result = console.log("FizzBuzz");
          break;
      case x % 3 === 0:
        result = console.log("Fizz");
          break;
      case x % 5 === 0:
        result = console.log("Buzz");
          break;
      default:
        result = console.log(x);
          break;
    }
    resolve(result);
  })
}

fizzBuzz(15)