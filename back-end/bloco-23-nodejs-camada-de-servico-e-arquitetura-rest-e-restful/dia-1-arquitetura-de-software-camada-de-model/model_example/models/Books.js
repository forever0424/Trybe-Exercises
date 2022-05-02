const connection = require('./connection');

const getByAuthorId = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id = ?'
  const [ bookData ] = await connection.execute(query, [id]);

  if (bookData.length === 0) return null;

  return bookData;
}

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books');
  return books;
}

const isValid = async (title, author_id) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!author_id) return false;
  const [authors] = await connection.execute('SELECT id FROM model_example.authors;');
  console.log(authors)
  if (!authors.some(({ id }) => id === Number(author_id))) return false;
  return true;
};

const create = async (title, author_id) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, author_id]
);

module.exports = { getAll, getByAuthorId, isValid, create }