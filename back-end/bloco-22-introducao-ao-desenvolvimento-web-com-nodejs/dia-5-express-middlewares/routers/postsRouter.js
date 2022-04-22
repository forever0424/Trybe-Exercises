const router = require('express').Router();
const { SUCCESS, NOT_FOUND } = require('../statusCode');

const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
]

router.get('/', (_req, res) => {
  return res.status(SUCCESS).json({ "posts": posts });
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) return next({ status: NOT_FOUND, message: 'post not found' });

  return res.status(SUCCESS).json(post);
});

module.exports = router;