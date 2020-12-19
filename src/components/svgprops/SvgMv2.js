import React from 'react';

function SvgMv2(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" {...props}>
      <circle fill="#00C17C" cx={36} cy={36} r={35.85} />
      <path
        fill="#FFF"
        d="M30.14 46.62V25.38L48.54 36l-18.4 10.62zm2.57-16.79v12.35L43.4 36l-10.69-6.17z"
      />
    </svg>
  )
}

export default SvgMv2;