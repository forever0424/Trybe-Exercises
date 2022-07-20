// Utilizando o operador $all, retorne todos os filmes que contenham action e adventure no array category.
db.movies.find({ category: { $all: ['action', 'adventure']}})

// Agora retorne os filmes que contenham action e sci-fi no array category e possuem nota do IMDB maior do que 7.
db.movies.find({
  $and: [
    {category: { $all: ['action', 'adventure']}},
    {imdbRating: { $gt: 7}}
  ]
})

// Retorne todos os filmes com ratings maior do que 103, exibindo apenas os campos title e ratings.
db.movies.find({
  ratings: { $elemMatch: { $gt: 103 }}
}, { title: true, ratings: true, _id: false})

// Retorne todos os filmes com ratings entre 100 e 105, exibindo apenas os campos title e ratings.
db.movies.find({
  ratings: { $elemMatch: { $gte: 100, $lte: 105 }}
}, { title: true, ratings: true, _id: false})

// Retorne todos os filmes com ratings entre 64 e 105 e divisíveis por 9, exibindo apenas os campos title e ratings.
db.movies.find({
  ratings: { $elemMatch: { $gte: 64, $lte: 105, $mod: [9, 0] }}
}, { title: true, ratings: true, _id: false})

// Retorne os filmes da categoria adventure e com ratings maior do que 103, exibindo apenas os campos title, ratings e category.
db.movies.find({
  $and: [
    {ratings: { $elemMatch: { $gt: 103 }}},
    {category: 'adventure'}
  ]
}, { title: 1, ratings: 1, _id: 0, category: 1})

// Retorne somente o título de todos os filmes com dois elementos no array category.
db.movies.find({ category: { $size: 2 }}, { title: 1, _id: 0})

// Retorne somente o título de todos os filmes com quatro elementos no array ratings.
db.movies.find({ ratings: { $size: 4 }}, { title: 1, _id: 0})

// Busque os filmes em que o módulo 5 do campo budget seja 0 e que o array category tenha tamanho 2.
db.movies.find({$and: [{budget: { $mod: [5,0]}}, {category: { $size: 2 }}]})

// Retorne os filmes da categoria "sci-fi" ou que possua o ratings maior do que 199, exibindo apenas os campos title, ratings e category.
db.movies.find({
  $or: [
    {ratings: { $elemMatch: { $gt: 199 }}},
    {category: 'sci-fi'}
  ]
}, { title: 1, ratings: 1, _id: 0, category: 1})

// Retorne os filmes em que o ratings possua tamanho 4 e que seja da category "adventure" ou "family", mas que não tenha o imdbRating menor que 7.
db.movies.find({
  $and: [
    {ratings: { $size: 4 }},
    {category: { $in: ['adventure', 'family']}},
    {imdbRating: { $gte: 7}}
  ]
}, { title: 1, ratings: 1, _id: 0, category: 1})

// Utilizando o operador $regex, retorne todos os filmes em que a descrição comece com a palavra "The".
db.movies.find({ description: { $regex: /^The/ }})

// Utilizando o operador $regex, retorne todos os filmes em que a descrição termine com a palavra "humanity.".
db.movies.find({ description: { $regex: /humanity.$/ }})