import styled from 'styled-components';

const handleColorType = (type) => {
  switch (type) {
    case 'grass':
      return 'background: #62B957;';
    case 'fire':
      return 'background: #FD7D24;';
    case 'water':
      return 'background: #4A90DA;';
    case 'bug':
      return 'background: #8CB330;';
    case 'normal':
      return 'background: #9DA0AA;';
    case 'poison':
      return 'background: #A552CC;';
    case 'electric':
      return 'background: #EED535;';
    case 'ground':
      return 'background: #927D44;';
    case 'fairy':
      return 'background: #ED6EC7;';
    case 'fighting':
      return 'background: #D67873;';
    case 'psychic':
      return 'background: #A13959;';
    case 'dark':
      return 'background: #A29288;';
    case 'flying':
      return 'background: #A890F0;';
    case 'ice':
      return 'background: #638D8D;';
    case 'steel':
      return 'background: #787887;';
    case 'ghost':
      return 'background: #A292BC;';
    case 'rock':
      return 'background: #D1C17D;';
    case 'dragon':
      return 'background: #A27DFA;';
    default:
      return 'background: #68A090;';
  }
};
export const Container = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  ${({ type }) => handleColorType(type)};
  height: 3.5vh;
  padding: 0 1em;
  margin-top: 0.5em;
  margin-right: 0.5em;
  border-radius: 5px;
  @media (min-width: 1050px) {
    height: 2vh;
    padding: 2px 5px;
    margin: 0;
    margin-top: 0.2em;
    margin-right: 0.5em;
    height: 100%;
  }
`;

export const Text = styled.p`
  margin: 0;
  margin-left: 0.5em;
  font-size: 1.7em;
  color: white;
  @media (min-width: 1050px) {
    font-size: 0.8em;
    margin-left: 0.2em;
  }
`;
