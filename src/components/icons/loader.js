import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="B">
        {/* < bracket */}
        <polyline
          points="38,36 28,50 38,64"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* > bracket */}
        <polyline
          points="62,36 72,50 62,64"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* / slash */}
        <line
          x1="55"
          y1="34"
          x2="45"
          y2="66"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </g>
      <path
        id="hex"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
