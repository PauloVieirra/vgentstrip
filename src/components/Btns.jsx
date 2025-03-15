import React from "react";
import '../styles/Button.css';

export function ButtonDetails ({ children, variant = 'section', onClick }) {
 return(
    <button
    className={`button ${variant}`}
    onClick={onClick}
    >
         {children}
      
    </button>
 );
}

export function ButtonMenus ({ children, variant = 'btnsMenu', onClick }) {
   return(
      <button
      className={`button ${variant}`}
      onClick={onClick}
      >
           {children}
        
      </button>
   );
  }