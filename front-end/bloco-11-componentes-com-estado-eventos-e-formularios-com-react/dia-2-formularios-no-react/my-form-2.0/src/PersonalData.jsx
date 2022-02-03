import React, { Component } from "react";
import estados from "./data";

class PersonalData extends Component {
  render() {
    const { handleChange, handleOnBlur } = this.props;

    const {
      currentState: {
        nome,
        email,
        cpf,
        endereco,
        cidade,
        estado,
        tipo
      },
    } = this.props;

    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            maxLength="40"
            value={nome}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            maxLength="50"
            value={email}
            required
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
        </label>
        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            maxLength="11"
            value={cpf}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Endereço:
          <input
            type="text"
            name="endereco"
            maxLength="200"
            value={endereco}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Cidade:
          <input
            type="text"
            name="cidade"
            maxLength="28"
            value={cidade}
            required
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
        </label>
        <label>
          Estado:
          <select name="estado" value={estado} required onChange={handleChange}>
            {estados.map((state) => (
              <option key={state}>{state}</option>
            ))}
          </select>
        </label>
        <label>
          Tipo:
          <input
            type="radio"
            id="casa"
            name="tipo"
            value="Casa"
            checked={tipo === 'Casa'}
            required
            onChange={handleChange}
          />
          <label htmlFor="casa">Casa</label>
          <input
            type="radio"
            id="apartamento"
            name="tipo"
            value="Apartamento"
            checked={tipo === 'Apartamento'}
            onChange={handleChange}
          />
          <label htmlFor="apartamento">Apartamento</label>
        </label>
      </fieldset>
    );
  }
}

export default PersonalData;
