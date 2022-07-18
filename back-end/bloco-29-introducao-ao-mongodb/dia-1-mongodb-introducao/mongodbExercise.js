// Retorne o documento com o _id igual a 8.
db.bios.find({ _id: 8})
// Retorne o documento com o _id igual a 8, mas só exiba os atributos: _id e name.
db.bios.find({ _id: 8}, {name: 1})
// Retorne apenas os atributos name e birth do documento com o _id igual a 8.
db.bios.find({ _id: 8}, {name: 1, birth: 1, _id: 0})
// Retorne todos os documentos em que o atributo name.first seja igual a John, utilizando o método pretty().
db.bios.find({ 'name.first': 'John' }).pretty()
// Retorne os 3 primeiros documentos da coleção bios utilizando o método pretty().
db.bios.find().limit(3).pretty()
// Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.
db.bios.find().skip(5).limit(2)

// Utilizando o mongoimport, importe o arquivo books.json para a sua instância local do MongoDB e utilize a coleção books para construir as seguintes consultas:
// Retorne a quantidade de documentos da coleção books.
// Conte quantos livros existem com o status = "PUBLISH".
db.books.countDocuments({ status: 'PUBLISH'})
// Exiba os atributos title, isbn e pageCount dos 3 primeiros livros. NÃO retorne o atributo _id.
db.books.find({}, {title: 1, isbn: 1, pageCount: 1, _id: 0}).limit(3)
// Pule 5 documentos e exiba os atributos _id, title, authors e status dos livros com o status = "MEAP", limitando-se a 10 documentos.
db.books.find({status: 'MEAP'}, {title: 1, author: 1, status: 1}).skip(5).limit(10)