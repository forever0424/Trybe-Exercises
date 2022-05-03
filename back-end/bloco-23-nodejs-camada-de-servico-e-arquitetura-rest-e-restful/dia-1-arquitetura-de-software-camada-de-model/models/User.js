const connection = require('./connection');
const Joi = require('joi');

const schema = Joi.object({
  firstName: Joi.string()
    .required(),

  lastName: Joi.string()
    .required(),

  password: Joi.string()
    .alphanum()
    .min(6)
    .max(30)
    .required(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
});

const isValid = (firstName, lastName, password, email) => {
  const { error } = schema.validate({ firstName, lastName, password, email });

  if (error) return { error: true, message: error.message };
  return { error: false }
}

const create = async (firstName, lastName, password, email) => connection.execute(
  'INSERT INTO users_crud.users (first_name, last_name, password, email) VALUES (?, ?, ?, ?)',
  [firstName, lastName, password, email]);

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM users_crud.users');
  return users;
};

const findById = async (id) => {
  const [user] = await connection.execute('SELECT * FROM users_crud.users WHERE id=?', [id]);
  if (user.length === 0) return null;
  return user;
}

const updateUser = async (firstName, lastName, password, email, id) => {
  const query = 'UPDATE users_crud.users SET first_name = ?, last_name = ?, password = ?, email = ? WHERE id = ?;'
  return await connection.execute(query, [firstName, lastName, password, email, id]);
}


module.exports = { isValid, create, getAll, findById, updateUser }