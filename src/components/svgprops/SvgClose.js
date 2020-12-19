import React from 'react';

function SvgClose(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path
        d="M25.1 24L47.3 1.8c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0L24 22.9 1.8.7C1.5.4 1 .4.7.7c-.3.3-.3.8 0 1.1L22.9 24 .7 46.2c-.3.3-.3.8 0 1.1s.8.3 1.1 0L24 25.1l22.2 22.2c.3.3.8.3 1.1 0 .3-.3.3-.8 0-1.1L25.1 24z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgClose;