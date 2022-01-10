import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import FormDataDisplay from './FormDataDisplay';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: 'Acre',
  tipo: '',
  resumo: '',
  cargo: '',
  descricao: '',
  enviado: false
}

class App extends Component {
  constructor() {
    super()
    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.showAlert = this.showAlert.bind(this);
  }

  handleChange = ({ target }) => {
    let { name, value } = target
    if (name === 'nome') value = value.toUpperCase();
    if (name === 'endereco') value = value.replace(/[^a-zA-Z0-9 ]/g, '');
    this.setState({ [name]: value })
  }

  handleOnBlur = ({target}) => {
    let { name, value } = target;
    if (name === 'cidade') value = isNaN(target.value[0]) ? value : ''
    if (name === 'email') {
      if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]+)[^0-9]$/i)) {
      alert('Email não é válido');
      value = '';
      }
    }
    this.setState({ [name]: value })
  }

  showAlert = () => {
    const alerted = sessionStorage.getItem('alerted') || false;
    if (!alerted) {
      alert('Preencha com cuidado esta informação.');
      sessionStorage.setItem('alerted', true)
    }
  }

  resetForm = () => this.setState(INITIAL_STATE);

  sendForm = () => this.setState({enviado: true});

  render() {
    return (
      <main>
        <Form 
          handleChange={this.handleChange}
          handleOnBlur={this.handleOnBlur}
          showAlert={this.showAlert}
          handleSubmit={this.handleSubmit}
          resetForm={this.resetForm}
          sendForm={this.sendForm}
          currentState={this.state}
        />
        { this.state.enviado && <FormDataDisplay currentState={ this.state } /> }
      </main>
    );
  }
}

export default App;
