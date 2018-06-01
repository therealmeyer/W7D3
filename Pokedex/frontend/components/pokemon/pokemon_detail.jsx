import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonDetail extends React.Component {
  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params.pokemonId !== newProps.match.params.pokemonId){
      return this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render(){
    if (this.props.ui.loading) {
      return (
        <div id="loading-pokeball-container">
          <div id="loading-pokeball"></div>
        </div>
      );
    }
    const id = this.props.match.params.pokemonId;
    const poke = this.props.pokemon[id];
    if (!poke.moves) return <div></div>;
    const moves = poke.moves.join(", ");
      return(
        <div>
          <div id="loading-pokeball-container">
            <div id="loading-pokeball"></div>
          </div>
          <img className = "poke-img" src = {poke.image_url}/>
          <h3>{poke.name}</h3>
          <ul>
            <li key="type">Type: {poke.poke_type}</li>
            <li key="attack">Attack: {poke.attack}</li>
            <li key="defense">Defense: {poke.defense}</li>
            <li key="moves">Moves: {moves}</li>
          </ul>
        </div>
      );
  }
}

export default PokemonDetail;
