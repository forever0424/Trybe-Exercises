// Selecione e faça a contagem dos restaurantes presentes nos bairros Queens, Staten Island e Bronx. (utilizando o atributo borough)
db.restaurants.countDocuments({ borough: { $in: ['Queens', 'Staten Island', 'Bronx'] }})

// Selecione e faça a contagem dos restaurantes que não possuem culinária do tipo American. (utilizando o atributo cuisine)
db.restaurants.countDocuments({ cuisine: { $ne: 'American' }})

// Selecione e faça a contagem dos restaurantes que possuem avaliação maior ou igual a 8. (utilizando o atributo rating)
db.restaurants.countDocuments({ rating: { $lte: 8 }})

// Selecione e faça a contagem dos restaurantes que possuem avaliação menor que 4.
db.restaurants.countDocuments({ rating: { $lt: 4 }})

// Selecione e faça a contagem dos restaurantes que não possuem as avaliações 5, 6 e 7.
db.restaurants.countDocuments({ rating: { $nin: [5, 6, 7] }})


// Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5, essa consulta também deve retornar restaurantes que não possuem o campo de avaliação.
db.restaurants.countDocuments({ rating: { $nor: { $lte: 5 } }})

// Selecione e faça a contagem dos restaurantes em que a avaliação seja maior ou igual a 6, ou restaurantes localizados no bairro Brooklyn.
db.restaurants.countDocuments({ $or: [{ rating: { $gte: 6 } }, {borough: 'Brooklyn'}] })

// Selecione e faça a contagem dos restaurantes localizados nos bairros Queens, Staten Island e Brooklyn e possuem avaliação maior que 4.
db.restaurants.countDocuments({
  $and: [
    { borough: {$in: ['Queens', 'Staten Island', 'Brooklyn']} },
    { rating: {$gt: 4} }
  ]
})

// Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1, nem o campo culinária seja do tipo American.
db.restaurants.countDocuments({ $nor: [{ cuisine: 'American' }, { rating: 1 }] })

// Selecione e faça a contagem dos resturantes em que a avaliação seja maior que 6 ou menor que 10, E esteja localizado no bairro Brooklyn OU não possuem culinária do tipo Delicatessen.
db.restaurants.countDocuments({
  $and: [
      { $or: [{ rating: { $gt: 6, $lt: 10 } }] },
      {
        or: [
          { borough: 'Brooklyn' },
          { cuisine: { $ne: 'Delicatessen' } }
        ]
      }
  ]
})


// Ordene alfabeticamente os restaurantes pelo nome (atributo name).
db.restaurants.find().sort({ name: 1})

// Ordene os restaurantes de forma decrescente baseado nas avaliações.
db.restaurants.find().sort({ rating: -1})


// Remova o primeiro restaurante que possua culinária do tipo Ice Cream, Gelato, Yogurt, Ices.
db.restaurants.deleteOne({ cuisine: "Ice Cream, Gelato, Yogurt, Ices" })

// Remova todos os restaurantes que possuem culinária do tipo American.
db.restaurants.deleteMany({ cuisine: "American" })


// Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está em centímetros.
db.superheroes.find({'aspects.height': {$lt: 180}})

// Retorne o total de super-heróis menores que 1.80m.
db.superheroes.countDocuments({'aspects.height': {$lt: 180}})

// Retorne o total de super-heróis com até 1.80m.
db.superheroes.countDocuments({'aspects.height': {$lte: 180}})

// Selecione um super-herói com 2.00m ou mais de altura.
db.superheroes.findOne({'aspects.height': {$gte: 200}})

// Retorne o total de super-heróis com 2.00m ou mais.
db.superheroes.countDocuments({'aspects.height': {$gte: 200}})

// Selecione todos os super-heróis que têm olhos verdes.
db.superheroes.find({'aspects.eyeColor': 'green'})

// Retorne o total de super-heróis com olhos azuis.
db.superheroes.countDocuments({'aspects.eyeColor': 'blue'})

// Retorne o total de super-heróis com cabelos pretos ou carecas ("No Hair").
db.superheroes.countDocuments({'aspects.hairColor': {$in: ['black', 'No Hair']}})

// Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.
db.superheroes.countDocuments({'aspects.hairColor': {$nin: ['black', 'No Hair']}})

// Selecione todos os super-heróis que não sejam humanos nem sejam maiores do que 1.80m.
db.superheroes.countDocuments({$nor: [{race: 'Human'}, {'aspects.height': {$gt: 180}}]})

// Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics.
db.superheroes.countDocuments({
  $and:[
    {$or: [{ 'aspects.height': 180 }, { 'aspects.height': 200 }]},
    {publisher: 'Marvel Comics'}
  ]
})

// Selecione todos os super-heróis que pesem entre 80kg e 100kg, sejam Humanos ou Mutantes e não sejam publicados pela DC Comics.
db.superheroes.countDocuments({
  $and:[
    {'aspects.weight': {$gte: 80, $lte: 100} },
    {$or: [{race: 'Human'}, {race: 'Mutant'}]},
    {publisher: {$ne: 'DC Comics'}}
  ]
})

// Retorne o total de documentos que não contêm o campo race.
db.superheroes.countDocuments({race: { $exists: false }})

// Retorne o total de documentos que contêm o campo hairColor.
db.superheroes.countDocuments({'aspects.hairColor': { $exists: true }})

// Remova apenas um documento publicado pela Sony Pictures.
db.superheroes.deleteOne({publisher: 'Sony Pictures'})

// Remova todos os documentos publicados pelo George Lucas.
db.superheroes.deleteMany({publisher: 'George Lucas'})
