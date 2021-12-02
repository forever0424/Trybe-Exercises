const API_URL = 'https://api.coincap.io/v2/assets';
const API2_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api/latest/currencies/usd/brl.json'

const brlCurrency = async () => {
  return await fetch(API2_URL)
    .then( response => response.json())
    .then( data => data.brl)
    .catch( error => error.toString())
}

const append = async (data) => {
  const brl = await brlCurrency();
  const li = document.createElement('li');
  const priceBrl = data.priceUsd * brl;
  li.innerText = `${data.name} (${data.symbol}): ${Number(priceBrl).toFixed(2)}`;
  document.getElementById('list').appendChild(li);
}

const fetchCoin = async () => {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      return data.data.map(({ name, symbol, priceUsd }) => ({
        name,
        symbol,
        priceUsd
      })).filter((obj, index) => index < 10).forEach((obj) => append(obj));
    }).catch((error) => error);
};

window.onload = () => fetchCoin();
