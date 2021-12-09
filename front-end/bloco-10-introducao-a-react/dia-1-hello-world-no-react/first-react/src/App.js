import logo from './logo.svg';
import './App.css';

const compromissos = ['conteúdo', 'exercícios', 'mentorias', 'projetos']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul>{compromissos.map((compromisso) => Task(compromisso))}</ul>
    </div>
  );
}

export default App;
