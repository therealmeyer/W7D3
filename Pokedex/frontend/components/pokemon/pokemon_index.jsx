import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    if(this.props.ui.loading)
    {
      return (
        <div id="loading-pokeball-container">
          <div id="loading-pokeball"></div>
        </div>
      );
    }
    return(
      <div>
        <Route exact path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <ul className="poke-ul">
          {this.props.pokemon.map((poke) => <PokemonIndexItem key={poke.id} pokemon={poke} />)};
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
