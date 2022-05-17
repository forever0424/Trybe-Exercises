const Book = require('../services/BooksService');

const getAll = async (req, res) => {
  const { author } = req.query;
  const books = await Book.getAll(author);

  return res.status(200).json(books);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await Book.getById(id);

  if (!book) return res.status(400).json({ message: 'Book not found' });

  return res.status(200).json(book);
}

const create = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;
  const newBook = await Book.create(title, author, pageQuantity, publisher);

  if (!newBook) return res.status(404).json({ message: 'Book already exists' });

  return res.status(201).json(newBook);
}

const update = async (req, res) => {
  const { id } = req.params;
  const updateBook = await Book.update(id, req.body);

  if (!updateBook) return res.status(404).json({ message: 'Book not found' });

  return res.status(200).json({ message: 'Book successfully updated' });
}

const remove = async (req, res) => {
  const { id } = req.params;
  const deleteBook = await Book.remove(id);

  if (!deleteBook) return res.status(404).json({ message: 'Book not found' });

  return res.status(200).json({ message: 'Book successfully deleted' });
}

module.exports = { getAll, getById, create, update, remove }