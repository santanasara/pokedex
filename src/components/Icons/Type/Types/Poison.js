import React from 'react';
import PropTypes from 'prop-types';

const Poison = ({
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
        d="M20.8897 19.2114C23.4143 17.1928 25 14.2762 25 11.0327C25 4.9395 19.4036 0 12.5 0C5.59644 0 0 4.9395 0 11.0327C0 14.1591 1.47332 16.9817 3.84059 18.9893C3.69712 19.4847 3.61842 20.0235 3.61842 20.5869C3.61842 23.0242 5.09116 25 6.90791 25C8.08838 25 9.12363 24.1658 9.70396 22.9128C10.2843 24.1658 11.3195 25 12.5 25C13.5761 25 14.5314 24.3068 15.1316 23.2352C15.7317 24.3068 16.6871 25 17.7631 25C19.5799 25 21.0526 23.0242 21.0526 20.5869C21.0526 20.1066 20.9954 19.6442 20.8897 19.2114ZM19.7369 11.2515C19.7369 14.345 16.4231 16.8527 12.3355 16.8527C8.2479 16.8527 4.93423 14.345 4.93423 11.2515C4.93423 8.15806 8.2479 5.65029 12.3355 5.65029C16.4231 5.65029 19.7369 8.15806 19.7369 11.2515Z"
        fill={fill}
      />
    </svg>
  );
};
Poison.propTypes = {
  fill: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  // eslint-disable-next-line
  style: PropTypes.object,
};
export default Poison;
