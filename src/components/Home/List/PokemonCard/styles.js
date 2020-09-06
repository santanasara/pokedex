import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  margin: 5em;
  border-radius: 10px;
  height: 15vh;
  background: #8bbe8a;
  box-shadow: 0px 10px 20px #7777;
`;
export const PokemonImage = styled.img`
  position: absolute;
  bottom: 5%;
  margin-right: 2em;
  right: 0;
  height: 120%;
  width: auto;
`;
export const TextWrapper = styled.div`
  display: inline-block;
  margin: 2em 2.5em;
`;
export const Name = styled.h2`
  margin: 0;
  font-size: 4em;
  color: #fff;
`;
export const Number = styled.p`
  margin: 0;
  font-size: 2em;
  color: #3b3b3b;
`;
