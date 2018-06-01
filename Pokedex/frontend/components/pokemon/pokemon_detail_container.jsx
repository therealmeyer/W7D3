import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = (state, ownProps) => {
  return ({
    pokemon: state.entities.pokemon,
    ui: state.ui
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (pokemon) => dispatch(requestSinglePokemon(pokemon))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
