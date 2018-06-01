import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { requestSinglePokemon, receivePokemon } from './actions/pokemon_actions';
import { fetchPokemon } from './util/api_util';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors';
import Root from './components/root';
import merge from 'lodash/merge';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.fetchPokemon = fetchPokemon;
  window.receivePokemon = receivePokemon;
  window.requestSinglePokemon = requestSinglePokemon;
  // window.selectAllPokemon = selectAllPokemon;
  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.merge = merge;

  ReactDOM.render(<Root store = {store}/>, root);
});
