import React, { Component } from "react";

class ProfessionalData extends Component {
  render() {
    const { handleChange, showAlert } = this.props;

    const {
      currentState: {
        resumo,
        cargo,
        descricao
      },
    } = this.props;

    return (
      <fieldset>
        <legend>Dados Profissionais</legend>
        <label>
          Resumo do currículo:
          <textarea
            name="resumo"
            cols="30"
            rows="10"
            maxLength="1000"
            value={resumo}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Cargo:
          <input
            type="text"
            name="cargo"
            maxLength="40"
            value={cargo}
            required
            onChange={handleChange}
            onMouseEnter={showAlert}
          />
        </label>
        <label>
          Descrição do cargo:
          <textarea
            name="descricao"
            cols="30"
            rows="10"
            maxLength="500"
            value={descricao}
            required
            onChange={handleChange}
          />
        </label>
      </fieldset>
    );
  }
}

export default ProfessionalData;
