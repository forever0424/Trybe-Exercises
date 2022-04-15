// const simpsons = require('./simpsons.json');

// const readSimpsons = () => simpsons.forEach((char) => console.log(`${char.id} - ${char.name}`));

// const readId = (id) => {
//   const promise = new Promise((resolve, reject) => {
//     if (!simpsons.some((char) => char.id === id)) reject(new Error('id não encontrado'));

//     const result = simpsons.forEach((char) => {
//       if (char.id === id) console.log(`${char.id} - ${char.name}`)
//       });

//     resolve(result)
//   })
//   return promise;
// }

const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent))
  .then((result) => result.forEach((char) => console.log(`${char.id} - ${char.name}`)));


const getById = async (id) => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const promise = new Promise((resolve, reject) => {
    if (!simpsons.some((char) => char.id === id)) reject(new Error('id não encontrado'));

    const result = simpsons.forEach((char) => {
      if (char.id === id) console.log(`${char.id} - ${char.name}`)
    });

    resolve(result)
  });
  return promise;
}

// getById('3')

const filterById = () => {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent))
    .then((simpsons) => simpsons.filter((char) => char.id !== '6' && char.id !== '10'))
    .then((newArray) => fs.writeFile('./simpsons.json', JSON.stringify(newArray)))
}

// filterById()

const createNewFile = () => {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent))
    .then((simpsons) => simpsons.filter((char) => Number(char.id) <= 4))
    .then((newArray) => fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray)))
}

// createNewFile()

const addNelson = () => {
  fs.readFile('./simpsonFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent))
    .then((simpsons) => {
      simpsons.push({ "id": "8", "name": "Nelson Muntz" })
      fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons))
    });
}

// addNelson()

const substituteNelson = () => {
  fs.readFile('./simpsonFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent))
    .then((simpsons) => {
      const newArray = simpsons.filter((char) => char.id !== '8');
      newArray.push({"id":"5","name":"Maggie Simpson"});
      fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray))
    });
}

substituteNelson()