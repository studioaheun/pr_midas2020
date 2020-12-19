import React from 'react';

const SvgArrowGradient =() => {
  return (
  <div className = {'svg-arrow-gradient'}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155 155">
    <defs>  
        <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%" > 
            <stop offset="0%" stop-color="#7A5FFF">
                <animate attributeName="stop-color" values="#7A5FFF; #01FF89; #7A5FFF" dur="4s" repeatCount="indefinite"></animate>
            </stop>

            <stop offset="100%" stop-color="#01FF89">
                <animate attributeName="stop-color" values="#01FF89; #7A5FFF; #01FF89" dur="4s" repeatCount="indefinite"></animate>
            </stop>
        </linearGradient> 
    </defs>
      <path
        fill="url('#logo-gradient')"
        d="M78.77000000000001 43.51000000000002h-2.55v70.84h2.55V43.51zm34.76 38.31l-1.87-1.73-30.48 32.99h-7.37L43.34 80.09l-1.87 1.73 31.23 33.81h9.6l31.23-33.81zm40.82-4.32C154.35 35.12 119.88.65 77.5.65S.65 35.12.65 77.5c0 42.38 34.47 76.85 76.85 76.85s76.85-34.47 76.85-76.85zm-2.55 0c0 40.97-33.33 74.3-74.3 74.3S3.2 118.47 3.2 77.5 36.53 3.2 77.5 3.2s74.3 33.33 74.3 74.3z"
      />  
    </svg>
  </div>
  );
}

export default SvgArrowGradient;