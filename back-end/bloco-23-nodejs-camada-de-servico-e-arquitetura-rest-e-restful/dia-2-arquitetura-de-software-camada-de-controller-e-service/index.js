require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Ping = require('./controllers/pingController');
const Cep = require('./controllers/cepController');

app.use(express.json());

app.get('/ping', Ping);

app.get('/cep/:cep', Cep.findByCep);

app.post('/cep', Cep.createCep);

app.use((err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ massage: err.message });
  }

  return res.status(500).json({ massage: err.message });
})

app.listen(PORT, () => console.log('Online!'))