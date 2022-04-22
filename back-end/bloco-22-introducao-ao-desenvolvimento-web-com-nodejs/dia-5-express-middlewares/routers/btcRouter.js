const router = require('express').Router();
const { SUCCESS } = require('../statusCode');
const { validToken } = require('../middlewares/validationsMiddlewares');
const axios = require('axios');
const rescue = require('express-rescue');

router.get('/price', validToken, rescue(async(_req, res) => {
  const result = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  res.status(SUCCESS).json(result.data);
}));

module.exports = router;