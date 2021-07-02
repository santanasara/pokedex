import React from 'react';
import PropTypes from 'prop-types';

const Rock = ({
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
        d="M19.3027 11.9735C19.3013 11.9716 19.3007 11.9692 19.3011 11.9668L20.8928 2.68586C20.8935 2.68159 20.8972 2.67847 20.9015 2.67847H21.4053C21.4092 2.67847 21.4126 2.68099 21.4137 2.68469L24.9996 14.0383C25.0007 14.0418 24.9995 14.0457 24.9966 14.048L22.3527 16.1122C22.3487 16.1153 22.343 16.1145 22.3401 16.1105L19.3027 11.9735ZM0 18.1261C0 18.1299 0.00247515 18.1334 0.00613433 18.1346L5.45624 19.9166C5.45887 19.9175 5.46179 19.917 5.46408 19.9155L17.6463 11.5051C17.6484 11.5037 17.6498 11.5015 17.6501 11.4991L18.9565 2.73345C18.9573 2.72807 18.9531 2.72324 18.9477 2.72324H8.15724C8.15456 2.72324 8.15208 2.72442 8.15037 2.72646L0.00204781 12.5562C0.000724087 12.5578 0 12.5598 0 12.5619V18.1261ZM7.72732 20.3706L13.6815 22.321C13.6841 22.3219 13.6871 22.3215 13.6894 22.3198L20.7782 17.235C20.7821 17.2322 20.7831 17.2268 20.7804 17.2228L18.123 13.2683C18.1203 13.2642 18.1147 13.2631 18.1106 13.2659L7.72732 20.3706Z"
        fill={fill}
      />
    </svg>
  );
};
Rock.propTypes = {
  fill: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  // eslint-disable-next-line
  style: PropTypes.object,
};
export default Rock;
