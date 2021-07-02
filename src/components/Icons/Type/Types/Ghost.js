import React from 'react';
import PropTypes from 'prop-types';

const Ghost = ({
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
        d="M18.0152 24.9134C15.7602 25.0289 13.1785 25.0289 12.3012 24.9134C5.45752 24.0131 0 19.0094 0 12.2461C0 5.48276 5.59644 0 12.5 0C19.4036 0 25 5.48276 25 12.2461C25 15.3917 23.7894 18.2602 21.7998 20.4291C21.2595 21.018 22.0008 21.4311 22.754 21.8508C23.4927 22.2625 24.2428 22.6805 23.8068 23.277C23.3265 23.9342 20.7223 24.7749 18.0152 24.9134ZM10.7422 10.7153C10.7422 11.7721 9.86772 12.6288 8.78906 12.6288C7.7104 12.6288 6.83594 11.7721 6.83594 10.7153C6.83594 10.0066 7.22925 9.38789 7.81367 9.05718C7.84731 9.97861 8.60493 10.7153 9.53462 10.7153H10.7422V10.7153ZM16.7957 9.05718C16.7621 9.97861 16.0044 10.7153 15.0748 10.7153H13.8672V10.7153C13.8672 11.7721 14.7417 12.6288 15.8203 12.6288C16.899 12.6288 17.7734 11.7721 17.7734 10.7153C17.7734 10.0066 17.3801 9.38789 16.7957 9.05718Z"
        fill={fill}
      />
    </svg>
  );
};
Ghost.propTypes = {
  fill: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  // eslint-disable-next-line
  style: PropTypes.object,
};
export default Ghost;
