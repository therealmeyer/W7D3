import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKE = 'RECEIVE_POKE';
export const START_LOADING_ALL_POKEMON = 'START_LOADING_ALL_POKEMON';
export const START_LOADING_SINGLE_POKEMON = 'START_LOADING_SINGLE_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemon = payload => ({
  type: RECEIVE_POKE,
  payload: payload
});

export const requestAllPokemon = () => (dispatch) => {
  dispatch({type: START_LOADING_ALL_POKEMON});
  return (APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon))));
};

export const requestSinglePokemon = (poke_id) => (dispatch) => {
  dispatch({type: START_LOADING_SINGLE_POKEMON});
  return (APIUtil.fetchPokemon(poke_id)
  .then(payload => dispatch(receivePokemon(payload))));

};
