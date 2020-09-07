import styled from 'styled-components';

const handleColorType = (type) => {
  switch (type) {
    case 'grass':
      return 'background: #8BBE8A;';
    case 'fire':
      return 'background: #FFA756;';
    case 'water':
      return 'background: #58ABF6;';
    case 'bug':
      return 'background: #8BD674;';
    case 'normal':
      return 'background: #B5B9C4;';
    case 'poison':
      return 'background: #9F6E97;';
    case 'electric':
      return 'background: #F2CB55;';
    case 'ground':
      return 'background: #E0C068;';
    case 'fairy':
      return 'background: #EBA8C3;';
    case 'fighting':
      return 'background: #C03028;';
    case 'psychic':
      return 'background: #F85888;';
    case 'dark':
      return 'background: #705848;';
    case 'flying':
      return 'background: #A890F0;';
    case 'ice':
      return 'background: #98D8D8;';
    case 'steel':
      return 'background: #B8B8D0;';
    case 'ghost':
      return 'background: #705898;';
    case 'rock':
      return 'background: #B8A038;';
    case 'dragon':
      return 'background: #7038F8;';
    default:
      return 'background: #68A090;';
  }
};
export const Card = styled.div`
  position: relative;
  margin: 5%;
  border-radius: 10px;
  max-height: 30vh;
  ${({ type }) => handleColorType(type)};
  box-shadow: 0px 10px 20px #7777;
  @media (min-width: 1050px) {
    height: 120px;
    width: 30%;
    margin: 1em 0.5em;
    &:last-of-type {
      margin-right: auto;
      margin-left: 2.4em;
    }
  }
`;
export const PokemonImage = styled.img`
  position: absolute;
  bottom: 1%;
  margin-right: 0 2em;
  right: 0;
  height: 130%;
  width: auto;
  z-index: 2;
  @media (min-width: 1050px) {
    height: 110%;
    margin-right: 0 0.5em;
    right: -1%;
  }
`;

export const Pokeball = styled.img`
  position: absolute;
  left: 65%;
  height: 100%;
  width: auto;
  opacity: 20%;
  @media (min-width: 1050px) {
    left: 63%;
  }
`;
export const TextWrapper = styled.div`
  display: inline-block;
  margin: 5%;
`;
export const Name = styled.h2`
  margin: 0;
  font-size: 3vh;
  color: #fff;
`;
export const Number = styled.p`
  margin: 0;
  font-size: calc(10px + 1vh);
  color: #3b3b3b;
`;
