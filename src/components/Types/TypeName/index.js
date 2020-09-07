import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Bug } from '../../../assets/types/bug.svg';
import { ReactComponent as Dark } from '../../../assets/types/dark.svg';
import { ReactComponent as Dragon } from '../../../assets/types/dragon.svg';
import { ReactComponent as Electric } from '../../../assets/types/electric.svg';
import { ReactComponent as Fairy } from '../../../assets/types/fairy.svg';
import { ReactComponent as Fighting } from '../../../assets/types/fighting.svg';
import { ReactComponent as Fire } from '../../../assets/types/fire.svg';
import { ReactComponent as Flying } from '../../../assets/types/flying.svg';
import { ReactComponent as Ghost } from '../../../assets/types/ghost.svg';
import { ReactComponent as Grass } from '../../../assets/types/grass.svg';
import { ReactComponent as Ground } from '../../../assets/types/ground.svg';
import { ReactComponent as Ice } from '../../../assets/types/ice.svg';
import { ReactComponent as Normal } from '../../../assets/types/normal.svg';
import { ReactComponent as Poison } from '../../../assets/types/poison.svg';
import { ReactComponent as Psychic } from '../../../assets/types/psychic.svg';
import { ReactComponent as Rock } from '../../../assets/types/rock.svg';
import { ReactComponent as Steel } from '../../../assets/types/steel.svg';
import { ReactComponent as Water } from '../../../assets/types/water.svg';
import { Container, Text } from './styles';

const TypeName = ({ type }) => {
  const capitalize = (typeName) => {
    return typeName.charAt(0).toUpperCase() + typeName.slice(1);
  };

  const getIcon = (typeName) => {
    const width = window.innerWidth;
    let scale;
    if (width >= 1050) {
      scale = 0.7;
    } else {
      scale = 1.3;
    }
    switch (typeName) {
      case 'grass':
        return (
          <Grass
            style={{ transform: `scale(${scale})` }}
            className="iconType"
          />
        );
      case 'fire':
        return (
          <Fire style={{ transform: `scale(${scale})` }} className="iconType" />
        );
      case 'water':
        return (
          <Water
            style={{ transform: `scale(${scale})` }}
            className="iconType"
          />
        );
      case 'bug':
        return (
          <Bug style={{ transform: `scale(${scale})` }} className="iconType" />
        );
      case 'normal':
        return (
          <Normal
            style={{ transform: `scale(${scale})` }}
            className="iconType"
          />
        );
      case 'poison':
        return (
          <Poison
            style={{ transform: `scale(${scale})` }}
            className="iconType"
          />
        );
      case 'electric':
        return (
          <Electric
            style={{ transform: `scale(${scale})` }}
            className="iconType"
          />
        );
      case 'ground':
        return (
          <Ground
            style={{ transform: `scale(${scale})` }}
            className="iconType"
          />
        );
      case 'fairy':
        return (
          <Fairy
            style={{ transform: `scale(${scale})` }}
            className="iconType"
          />
        );
      case 'fighting':
        return (
          <Fighting
            style={{ transform: `scale(${scale})` }}
            className="iconType"
          />
        );
      case 'psychic':
        return (
          <Psychic
            style={{ transform: `scale(${scale})` }}
            className="iconType"
          />
        );
      case 'dark':
        return (
          <Dark style={{ transform: `scale(${scale})` }} className="iconType" />
        );
      case 'flying':
        return (
          <Flying
            style={{ transform: `scale(${scale})` }}
            className="iconType"
          />
        );
      case 'ice':
        return (
          <Ice style={{ transform: `scale(${scale})` }} className="iconType" />
        );
      case 'steel':
        return (
          <Steel
            style={{ transform: `scale(${scale})` }}
            className="iconType"
          />
        );
      case 'ghost':
        return (
          <Ghost
            style={{ transform: `scale(${scale})` }}
            className="iconType"
          />
        );
      case 'rock':
        return (
          <Rock style={{ transform: `scale(${scale})` }} className="iconType" />
        );
      case 'dragon':
        return (
          <Dragon
            style={{ transform: `scale(${scale})` }}
            className="iconType"
          />
        );
      default:
        return <p>??</p>;
    }
  };
  return (
    <Container type={type}>
      {getIcon(type)}
      <Text>{capitalize(type)}</Text>
    </Container>
  );
};

TypeName.propTypes = {
  type: PropTypes.string.isRequired,
};

export default TypeName;
