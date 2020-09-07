import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  PokemonImage,
  Name,
  Number,
  TextWrapper,
  Pokeball,
} from './styles';
import TypeName from '../../../Types/TypeName';
import pokeball from '../../../../assets/patterns/pokeball.png';
// import { ReactComponent as SmallPattern } from '../../../../assets/patterns/6x3.svg';

/* const styles = {
  opacity: '15%',
  position: 'absolute',
  left: '30%',
  top: '-8%',
}; */

const PokemonCard = ({ pokemon }) => {
  return (
    <Card type={pokemon.type[0]}>
      {/* <SmallPattern className="iconType" style={styles} /> */}
      <TextWrapper>
        <Number>#{pokemon.number}</Number>
        <Name>{pokemon.name}</Name>
        {pokemon.type.map((type) => (
          <TypeName key={type} type={type} />
        ))}
      </TextWrapper>
      <PokemonImage src={pokemon.ThumbnailImage} />
      <Pokeball src={pokeball} />
    </Card>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PokemonCard;
