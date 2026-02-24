import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        {/* < bracket */}
        <polyline
          points="27,33 17,45 27,57"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* > bracket */}
        <polyline
          points="51,33 61,45 51,57"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* / slash */}
        <line
          x1="44"
          y1="31"
          x2="34"
          y2="59"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />
      </g>
    </g>
  </svg>
);

export default IconLogo;
