import React from 'react';
import { ReactComponent as IconType } from '../../../assets/types/grass.svg';
import { Container, Text } from './styles';

const TypeName = () => {
  return (
    <Container>
      <IconType className="iconType" />

      <Text>Grass</Text>
    </Container>
  );
};

export default TypeName;
