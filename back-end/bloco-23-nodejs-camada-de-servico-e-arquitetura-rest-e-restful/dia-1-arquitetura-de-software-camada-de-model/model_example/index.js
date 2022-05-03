const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Author = require('./models/Author');
const Books = require('./models/Books');

app.use(express.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not Found' });

  return res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { title, author_id } = req.body;

  if (!Author.isValid(title, author_id)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(title, author_id);

  res.status(201).json({ message: 'Autor criado com sucesso!'});
});

app.get('/books', async (req, res) => {
  const { id } = req.query;
  const books = await Books.getByAuthorId(id);

  if (!books) return res.status(404).json({ message: 'Not Found' });

  return res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { title, authorId } = req.body;
  const response = await Books.isValid(title, authorId)
  if (!response) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Books.create(title, authorId);

  res.status(201).json({ message: 'Livro criado com sucesso!'});
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});