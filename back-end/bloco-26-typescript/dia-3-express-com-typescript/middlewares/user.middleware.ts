import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { User } from '../interfaces/user.interface';

const properties = ['name', 'email', 'password'];

const emailRegex = new RegExp(/[^@ \s]+@[^@ \s]+\.[^@ \s]+/)

function validateProperties(user: User): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(user, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
}

function validateValues(user: User): [boolean, string | null] {
  const entries = Object.entries(user);
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if (property === 'name' && value.length < 3) return [false, property];
    if (property === 'email' && !value.match(emailRegex)) return [false, property];
    if (property === 'password' && value.length < 6 || value.length > 12) {
      return [false, property];
    }
  }
  return [true, null];
}

function validationUser(req: Request, res: Response, next: NextFunction) {
  const user: User = req.body;

  let [valid, property] = validateProperties(user);

  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      `O campo ${property} é obrigatório.`,
    );
  }

  [valid, property] = validateValues(user);

  if (!valid) {
    let string;
    if (property === 'name') string = 'O nome deve possuir pelo menos 3 caracteres';
    if (property === 'email') {
      string = 'O email deve possuir um formato de email válido (email@email.com)';
    }
    if (property === 'password') {
      string = 'A senha deve possuir no mínimo 6 e no máximo 12 caracteres';
    }
    return res.status(StatusCodes.BAD_REQUEST).send(string);
  }

  next();
}

export default validationUser;