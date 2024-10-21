// src/components/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div style={spinnerStyle}>
      <div style={bounceStyle1}></div>
      <div style={bounceStyle2}></div>
      <div style={bounceStyle3}></div>
    </div>
  );
};

const spinnerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const bounceStyle1 = {
  width: '12px',
  height: '12px',
  backgroundColor: '#007BFF',
  borderRadius: '100%',
  display: 'inline-block',
  animation: 'bounce 1.4s infinite ease-in-out both',
  animationDelay: '-0.32s',
};

const bounceStyle2 = {
  ...bounceStyle1,
  animationDelay: '-0.16s',
};

const bounceStyle3 = {
  ...bounceStyle1,
  animationDelay: '0s',
};

export default LoadingSpinner;
