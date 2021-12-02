// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const h2 = document.getElementById('jokeContainer');

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => h2.innerText = data.joke);
};

window.onload = () => fetchJoke();
