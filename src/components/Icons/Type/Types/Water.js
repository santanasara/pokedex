import React from 'react';
import PropTypes from 'prop-types';

const Water = ({
  width = '25',
  height = '25',
  fill = '#fff',
  style = { position: 'static' },
}) => {
  return (
    <svg
      width={width}
      height={height}
      style={style}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.61 16.9204C20.61 21.3827 16.9791 25 12.5 25C8.02094 25 4.38997 21.3827 4.38997 16.9204C4.38997 12.5806 12.0613 0.661548 12.482 0.011124C12.4917 -0.0037081 12.5084 -0.00370797 12.518 0.0111242C12.9387 0.661548 20.61 12.5806 20.61 16.9204ZM11.1481 22.4097C7.03267 21.5093 7.7369 16.9505 7.7369 16.9505C7.7369 16.9505 8.86068 19.7024 11.5878 20.5939C14.3149 21.4853 17.6105 20.1779 17.6105 20.1779C17.6105 20.1779 15.2635 23.3102 11.1481 22.4097Z"
        fill={fill}
      />
    </svg>
  );
};
Water.propTypes = {
  fill: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  // eslint-disable-next-line
  style: PropTypes.object,
};
export default Water;