const jwt = require('jsonwebtoken');

const secret = 'seusecretdetoken';

module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  if (username !== 'admin') {
    return next({ statusCode: 401, message: 'Invalid username' });
  }

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const admin = username === 'admin' && password === 's3nh4S3gur4???';
  
  const token = jwt.sign({ data: { username, admin } }, secret, jwtConfig);
  res.status(200).json({ token });
}