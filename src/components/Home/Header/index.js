import React from 'react';
import {
  HeaderBackground,
  HeaderMenu,
  Container,
  HeaderIcon,
  Title,
  SubTitle,
  HeaderText,
} from './styles';

const icons = require.context('../../../assets/icons');
const Header = () => {
  return (
    <>
      <Container>
        <HeaderBackground />
        <HeaderMenu>
          <HeaderIcon src={icons('./generation.svg')} alt="Generations" />
          <HeaderIcon src={icons('./sort.svg')} alt="Sort" />
          <HeaderIcon src={icons('./filter.svg')} alt="Filter" />
        </HeaderMenu>
      </Container>
      <HeaderText>
        <Title>Pokedex</Title>
        <SubTitle>
          Search for Pokemon by name or using the National Pokedex number.
        </SubTitle>
      </HeaderText>
    </>
  );
};

export default Header;
