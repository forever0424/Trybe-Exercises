import { Component } from "react";
import pokemons from "./Data";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render () {
    return pokemons.map((element) => (<section className='pokemons'key={element.name}><Pokemon pokemon={element}/></section>) )
  }
}

export default Pokedex;
