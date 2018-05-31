import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    return(
      <ul className="poke-ul">
        {this.props.pokemon.map((poke) => {
          return (<li className = "poke-li" key = {poke.id}>
            <div>{poke.name}</div>
           <img src={poke.image_url}/></li>);
        })}
      </ul>
    );
  }
}

export default PokemonIndex;
