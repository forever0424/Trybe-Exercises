const states = document.getElementById('state');
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

document.getElementById('date').DatePickerX.init({
  format: 'dd/mm/yyyy',
  minDate: new Date()
});

document.getElementById('form').JustValidate();

new window.JustValidate('#form')