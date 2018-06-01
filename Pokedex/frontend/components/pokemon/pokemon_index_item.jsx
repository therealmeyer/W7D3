import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => {
  const url = `/pokemon/${pokemon.id}`;

  return (
    <li className = "poke-li">
    <img src={pokemon.image_url}/>
    <Link to = {url}>{pokemon.name}</Link>
  </li>
  );
};

export default PokemonIndexItem;
