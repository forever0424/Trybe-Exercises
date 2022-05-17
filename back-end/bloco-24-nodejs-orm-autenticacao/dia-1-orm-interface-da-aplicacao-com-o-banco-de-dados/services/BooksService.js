const { Book } = require('../models');

const getByAuthor = async (author) => {
  const books = await Book.findAll({ where: { author } });
  return books;
}

const getAll = async (author) => {
  if (author) return getByAuthor(author);

  const books = await Book.findAll({ order: ['title'] });
  return books;
}

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
}

const create = async (title, author, pageQuantity, publisher) => {
  const check = await Book.findAll({ where: { title, author } });

  console.log(check);
  if (check.length) return false;
  
  const newBook = await Book.create({ title, author, pageQuantity, publisher });

  return newBook;
}

const update = async (id, obj) => {
  const [updateBook] = await Book.update(obj, { where: { id } });

  return updateBook;
}

const remove = async (id) => {
  const deleteBook = await Book.destroy({ where: { id } });

  return deleteBook;
}

module.exports = { getAll, getById, create, update, remove }