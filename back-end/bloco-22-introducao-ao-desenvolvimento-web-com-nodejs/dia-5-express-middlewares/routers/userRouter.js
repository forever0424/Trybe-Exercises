const router = require('express').Router();
const { CREATED } = require('../statusCode');
const { validUser, validEmail, validPassword } = require('../middlewares/validationsMiddlewares');

const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(6).toString('hex');
}

router.post('/register', validUser, validEmail, validPassword, (_req, res) => {
  return res.status(CREATED).json({ "message": "user created" })
})

router.post('/login', validEmail, validPassword, (_req, res) => {
  return res.status(CREATED).json({ "token": generateToken() })
})

module.exports = router;