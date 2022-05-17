const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const BookRouter = require('./routes/BookRouter');

app.use(express.json());

app.use('/books', BookRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));