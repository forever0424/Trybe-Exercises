const Cep = require('../services/cepService');

const findByCep = async (req, res, next) => {
  try {
    const { cep } = req.params;
    const result = await Cep.findByCep(cep);
    return res.status(200).json(result);
  } catch (error) {
    next(error)
  }
}

const createCep = async (req, res, next) => {
  try {
    const { cep, logradouro, bairro, localidade, uf } = req.body;
    const result = await Cep.createCep(cep, logradouro, bairro, localidade, uf);
    return res.status(201).json(result);
  } catch (error) {
    next(error)
  }
}

module.exports = { findByCep, createCep }
