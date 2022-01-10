import React, { Component } from "react";
import PersonalData from "./PersonalData";
import ProfessionalData from "./ProfessionalData";

class Form extends Component {
  render() {
    const { sendForm, resetForm, handleChange, currentState,
       handleOnBlur, showAlert } = this.props;
    
    return (
      <form>
        <PersonalData 
          handleChange={handleChange}
          currentState={currentState}
          handleOnBlur={handleOnBlur}
        />
        <ProfessionalData 
          handleChange={handleChange}
          showAlert={showAlert}
          currentState={currentState}
        />
        <input 
          type="button"
          onClick={ sendForm }
          value="Enviar"
        />
        <input 
          type="button"
          onClick={ resetForm }
          value="Limpar"
        />
      </form>
    );
  }
}

export default Form;
