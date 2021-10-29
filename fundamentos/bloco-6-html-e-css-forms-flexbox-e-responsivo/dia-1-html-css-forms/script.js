const states = document.getElementById('state');
const date = document.getElementById("date");
const obj = {
   'AC': 'Acre',
   'AL': 'Alagoas',
   'AP': 'Amapá',
   'AM': 'Amazonas',
   'BA': 'Bahia',
   'CE': 'Ceará',
   'DF': 'Distrito Federal',
   'ES': 'Espírito Santo',
   'GO': 'Goías',
   'MA': 'Maranhão',
   'MT': 'Mato Grosso',
   'MS': 'Mato Grosso do Sul',
   'MG': 'Minas Gerais',
   'PA': 'Pará',
   'PB': 'Paraíba',
   'PR': 'Paraná',
   'PE': 'Pernambuco',
   'PI': 'Piauí',
   'RJ': 'Rio de Janeiro',
   'RN': 'Rio Grande do Norte',
   'RS': 'Rio Grande do Sul',
   'RO': 'Rondônia',
   'RR': 'Roraíma',
   'SC': 'Santa Catarina',
   'SP': 'São Paulo',
   'SE': 'Sergipe',
   'TO': 'Tocantins',
}
function allStates() {
  for (let i = 0; i < Object.keys(obj).length; i += 1) {
    const element = document.createElement('option');
    element.value = Object.keys(obj)[i];
    element.innerText = Object.values(obj)[i];
    states.appendChild(element);
  }
}
allStates();

// let today = new Date();
// let dd = today.getDate();
// let mm = today.getMonth() + 1; //January is 0!
// let yyyy = today.getFullYear();

// if (dd < 10) {
//    dd = '0' + dd;
// } if (mm < 10) {
//    mm = '0' + mm;
// }
// today = dd + '-' + mm + '-' + yyyy;
// date.setAttribute("maxlength", today);
date.max = new Date().toISOString().split("T")[0];

const form = document.querySelectorAll('.data');
const div = document.getElementById('dataCollected');
function allData(e) {
  e.preventDefault();
  for (let i = 0; i < form.length; i += 1) {
    const data = document.createElement('span');
    data.innerText = `${form[i].name}=${form[i].value}&`;
    div.appendChild(data);
  }
}
const btn = document.getElementById('btn');
btn.addEventListener('click', allData);
