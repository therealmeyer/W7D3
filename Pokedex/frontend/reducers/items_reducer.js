import { RECEIVE_POKE } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POKE:
      return action.payload.items;
    default:
      return state;
  }
};

export default itemsReducer;
