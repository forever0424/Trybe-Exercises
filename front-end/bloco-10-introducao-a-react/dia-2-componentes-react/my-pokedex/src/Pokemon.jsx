import { Component } from "react";
import PropTypes from "prop-types";

class Pokemon extends Component {
  render() {
      const { name, type, averageWeight, image } = this.props.pokemon;
      return (
          <section className='info'>
              <p>{name}</p>
              <p>{type}</p>
              <p>Average Weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
              <img src={ image } alt={ name } />
          </section>
      )
  }
}

PropTypes.shape({
  name: PropTypes.string,
  type: PropTypes.string,
  weight: PropTypes.string,
})

export default Pokemon;
