const connection = require('./connection');
const axios = require('axios');

const createCep = async (cep, logradouro, bairro, localidade, uf) => connection
  .execute('INSERT INTO cep_lookup.ceps' + 
  '(cep, logradouro, bairro, localidade, uf)' + 
  'VALUES (?, ?, ?, ?, ?)', [cep, logradouro, bairro, localidade, uf]);

const findByCep = async (lookUpCep) => {
  const [data] = await connection.execute('SELECT * FROM cep_lookup.ceps WHERE cep = ?;', [lookUpCep]);
  if (data.length === 0) {
    const result = await axios.get(`https://viacep.com.br/ws/${lookUpCep}/json/`);
    const { cep, logradouro, bairro, localidade, uf } = result.data;
    await createCep(cep.replace('-', ''), logradouro, bairro, localidade, uf)
    return result.data;
  }
  return data;
};


module.exports = { findByCep, createCep }
