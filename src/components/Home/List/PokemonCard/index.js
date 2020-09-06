import React from 'react';
import { Card, PokemonImage, Name, Number, TextWrapper } from './styles';
import TypeName from '../../../Types/TypeName';
import pokemon from '../../../../assets/generations/generation1/001.png';

const PokemonCard = () => {
  return (
    <Card>
      <TextWrapper>
        <Number>#001</Number>
        <Name>Bulbasaur</Name>
        <TypeName />
      </TextWrapper>
      <PokemonImage src={pokemon} />
    </Card>
  );
};

export default PokemonCard;
