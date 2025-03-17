import React from 'react';
import '../styles/Card.css';
import Button from './Button';

const Card = ({ image, title, description, textBtn }) => {
  return (
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Button variant="secondary">{textBtn}</Button>
      </div>
    </div>
  );
};

export default Card;