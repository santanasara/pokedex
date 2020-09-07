import React from 'react';
import pokemonData from '../../../static/pokemon_data.json';
import PokemonCard from './PokemonCard';
import { Container } from './styles';

const pokemons = pokemonData.slice(0, 151);
const PokemonList = () => {
  return (
    <Container>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Container>
  );
};

export default PokemonList;
