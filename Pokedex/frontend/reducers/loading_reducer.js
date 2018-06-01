import { START_LOADING_ALL_POKEMON, START_LOADING_SINGLE_POKEMON, RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions';

const loadingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_LOADING_ALL_POKEMON:
      return true;
    case START_LOADING_SINGLE_POKEMON:
      return true;
    case RECEIVE_ALL_POKEMON:
      return false;
    case RECEIVE_POKE:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
