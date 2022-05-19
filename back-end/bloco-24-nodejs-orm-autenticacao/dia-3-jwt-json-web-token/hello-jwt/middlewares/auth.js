const jwt = require('jsonwebtoken');

const segredo = 'seusecretdetoken';

module.exports = async (req, _res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return next({ statusCode: 401, message: 'Token não encontrado' });
  }

  try {
    const decoded = jwt.verify(token, segredo);

    if (!decoded.data.admin) return next({ statusCode: 403, message: 'Restricted access'});

    req.user = { secretInfo: "Peter Parker é o Homem-Aranha" };

    return next();
  } catch (err) {
    return next({ statusCode: 401, message: err.message });
  }
};