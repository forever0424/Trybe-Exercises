const Joi = require('joi');

const schema = Joi.object({
  username: Joi.string().alphanum().min(5),
  password: Joi.string().min(5)
});

module.exports = (req, _res, next) => {
  const isValid = schema.validate(req.body);

  if (isValid.error) next(isValid.error);

  next();
}