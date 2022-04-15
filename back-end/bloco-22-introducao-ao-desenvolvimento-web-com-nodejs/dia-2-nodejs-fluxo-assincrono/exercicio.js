const test = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) reject(new Error("Informe apenas números"));

    const result = (a + b) * c;

    if (result < 50) reject(new Error("Valor muito baixo"));

    resolve(result);
  });
  return promise;
}

const random = Math.floor(Math.random() * 21);

test(random, random, random).then((result) => console.log(result)).catch((e) => console.log(e));

const asyncCall = async () => {
  try {
    const result = await test(random, random, random);
    console.log(result);
  }
  catch (err) {
    console.log(err);
  }
}

asyncCall();