const router = require('express').Router();
const Book = require('../controllers/BooksController');

router.get('/', Book.getAll);

router.get('/:id', Book.getById);

router.post('/', Book.create);

router.put('/:id', Book.update);

router.delete('/:id', Book.remove);

module.exports = router;