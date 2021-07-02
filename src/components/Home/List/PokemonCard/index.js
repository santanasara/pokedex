import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  PokemonImage,
  Name,
  Number,
  TextWrapper,
  PatternContainer,
  PokeballContainer,
} from './styles';
import TypeName from '../../../Types/TypeName';
import Pattern from '../../../Icons/Pattern';

const PokemonCard = ({ pokemon }) => {
  return (
    <Card type={pokemon.type[0]}>
      <PatternContainer>
        <Pattern name="smallDots" width="30%" height="auto" />
      </PatternContainer>
      <PokeballContainer>
        <Pattern
          name="pokeball"
          width="auto"
          height="108%"
          style={{ margin: '-2% -2% 0 0' }}
        />
      </PokeballContainer>
      <TextWrapper>
        <Number>#{pokemon.number}</Number>
        <Name>{pokemon.name}</Name>
        {pokemon.type.map((type) => (
          <TypeName key={type} type={type} />
        ))}
      </TextWrapper>
      <PokemonImage src={pokemon.ThumbnailImage} />
    </Card>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PokemonCard;
