const Cep = require('../models/cepModel');
const Joi = require('joi');

const schema = Joi.object({
  cep: Joi.string().regex(/\d{5}-?\d{3}/).required(),
  logradouro: Joi.string().required(),
  bairro: Joi.string().required(),
  localidade: Joi.string().required(),
  uf: Joi.string().length(2).required()
})

const validateCep = (cep) => {
  if (!cep.match(/\d{5}-?\d{3}/)) {
    const invalid = { status: 400, message: "CEP inválido" };
    throw invalid;
  }
}

const validateResult = (result) => {
  if (result.length === 0) {
    const notFound = { status: 404, message: "CEP não encontrado" };
    throw notFound;
  }
}

const findByCep = async (cep) => {
  try {
    validateCep(cep);
    const result = await Cep.findByCep(cep);
    validateResult(result);
  
    return result;
  } catch (error) {
    console.log(error);
  }
}

const validateAddress = (cep, logradouro, bairro, localidade, uf) => {
  const checkCep = findByCep(cep);
  if (checkCep.length === 1) {
    const alreadyExists = { status: 409, message: "CEP já existente" };
    throw alreadyExists;
  }

  const { error } = schema.validate({ cep, logradouro, bairro, localidade, uf });
  if (error) {
    const invalid = { status: 400, message: error.message };
    throw invalid;
  }
}

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  try {
    validateAddress(cep, logradouro, bairro, localidade, uf);
  
    await Cep.createCep(cep, logradouro, bairro, localidade, uf);
    return { cep, logradouro, bairro, localidade, uf }
  } catch (error) {
    console.log(error)
  }
}

module.exports = { findByCep, createCep }
