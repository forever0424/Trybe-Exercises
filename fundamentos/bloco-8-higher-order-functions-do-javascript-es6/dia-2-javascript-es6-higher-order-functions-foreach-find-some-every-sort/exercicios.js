const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const authorBornIn1947 = books.find((obj) => obj.author.birthYear === 1947).author.name;
console.log(authorBornIn1947);

function smallerName() {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  })
  return nameBook;
};
console.log(smallerName());


const getNamedBook = books.find((obj) => obj.name.length === 26);
console.log(getNamedBook);

const booksOrderedByReleaseYearDesc = books.sort((a, b) => b.releaseYear - a.releaseYear);
console.log(booksOrderedByReleaseYearDesc);

const everyoneWasBornOnSecXX = books.every((obj) => obj.author.birthYear < 2001 && obj.author.birthYear > 1900);
console.log(everyoneWasBornOnSecXX);

const someBookWasReleaseOnThe80s = books.some((obj) => obj.releaseYear < 1990 && obj.releaseYear >= 1980);
console.log(someBookWasReleaseOnThe80s);

// function authorUnique() {
//   let year = true;
//   books.forEach((obj) => {
//     let birth = obj.author.birthYear;
//     for (let i of books) {
//       if (i !== obj && i.author.birthYear - birth === 0) {
//         year = false;
//       }
//     }
//   })
//   return year;
// };
function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}
console.log(authorUnique());
