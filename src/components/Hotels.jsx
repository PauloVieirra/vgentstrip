import React from 'react';
import '../styles/Card.css';
import Button from './Button';

const Hotels = ({ image, name, description, price, rating, amenities }) => {
  return (
    <div className="card-horizontal">
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="card-content">
        <div className="hotel-header">
          <h3>{name}</h3>
          <div className="hotel-rating">{"⭐".repeat(rating)}</div>
        </div>
        <p>{description}</p>
        <div className="hotel-amenities">
          {amenities && amenities.map((amenity, index) => (
            <span key={index} className="amenity-tag">{amenity}</span>
          ))}
        </div>
        <div className="hotel-price">
          <span className="price-label">A partir de</span>
          <span className="price-value">R$ {price}</span>
          <span className="price-period">/noite</span>
        </div>
        <Button variant="secondary">RESERVAR AGORA →</Button>
      </div>
    </div>
  );
};

export default Hotels;