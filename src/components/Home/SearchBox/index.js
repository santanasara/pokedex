import React from 'react';
import { Container, Icon, Input } from './styles';
import search from '../../../assets/icons/search.svg';

const SearchBox = () => {
  return (
    <Container>
      <Icon src={search} alt="Search" />
      <Input placeholder="What Pokemon are you looking for?" />
    </Container>
  );
};

export default SearchBox;
