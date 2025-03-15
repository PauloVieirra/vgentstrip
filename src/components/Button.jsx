import React from 'react';
import '../styles/Button.css';

export function Button ({ children, variant = 'primary', onClick }) {
  return (
    <button
      className={`button ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;








