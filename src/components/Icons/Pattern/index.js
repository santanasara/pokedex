import React from 'react';
import SmallDots from './Patterns/SmallDots';
import Pokeball from './Patterns/Pokeball';

const Pattern = ({ name, width, height, fill, style }) => {
  const getPattern = (patternName) => {
    switch (patternName.toLowerCase()) {
      case 'smalldots':
        return (
          <SmallDots width={width} height={height} fill={fill} style={style} />
        );
      case 'pokeball':
        return (
          <Pokeball width={width} height={height} fill={fill} style={style} />
        );
      default:
        return <div>???</div>;
    }
  };
  return getPattern(name);
};

export default Pattern;
