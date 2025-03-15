import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { useDestination } from '../context/DestinationContext';
import { destinations } from '../data/destinations';
import { turisticPoints } from '../data/turistics';
import '../styles/DestinationDetails.css';

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedDestination } = useDestination();

  const destination = destinations.find(d => d.id.toLowerCase() === (selectedDestination?.id || id).toLowerCase());

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className="destination-details">
      <Navbar />
      <div className="hero-banner" style={{ backgroundImage: `url(${destination.image})` }}>
        <div className="overlay"></div>
        <h1>{destination.title}</h1>
      </div>
      
      <div className="details-content">
        <Button 
          variant="secondary" 
          onClick={() => navigate(-1)}
          className="back-button"
        >
          ← Voltar
        </Button>

        <div className="main-info">
          <p className="description">{destination.fullDescription}</p>
          
          <div className="trip-details">
            <div className="detail-item">
              <h3>Melhor época para visitar</h3>
              <p>{destination.bestTimeToVisit}</p>
            </div>
            <div className="detail-item">
              <h3>Duração recomendada</h3>
              <p>{destination.duration}</p>
            </div>
            <div className="detail-item">
              <h3>Preço</h3>
              <p>{destination.price}</p>
            </div>
            <div className="detail-item">
              <h3>Custo médio diário</h3>
              <p>{destination.averageExpense}</p>
            </div>
          </div>

          <div className="highlights">
            <h2>Destaques</h2>
            <ul>
              {destination.highlights?.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}            
            </ul>
          </div>

          <div className="additional-info">
            <div className="info-section">
              <h2>Gastronomia Local</h2>
              <ul className="food-list">
                {destination.suggestedFoods?.map((food, index) => (
                  <li key={index}>{food}</li>
                ))}
              </ul>
            </div>

            <div className="info-section">
              <h2>Atividades</h2>
              <ul className="activities-list">
                {destination.activities?.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>

            <div className="info-section">
              <h2>Onde Ficar</h2>
              <div className="accommodation-options">
                <div className="hotel-category">
                  <h3>Hotéis de Luxo</h3>
                  <ul>
                    {destination.luxuryHotels?.map((hotel, index) => (
                      <li key={index}>{hotel}</li>
                    ))}
                  </ul>
                </div>
                <div className="hotel-category">
                  <h3>Pousadas</h3>
                  <ul>
                    {destination.simplePousadas?.map((pousada, index) => (
                      <li key={index}>{pousada}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h2>Curiosidades</h2>
              <ul className="curiosities-list">
                {destination.curiosities?.map((curiosity, index) => (
                  <li key={index}>{curiosity}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cta-section">
            <h2>Pronto para começar sua aventura?</h2>
            <Button variant="primary">Reservar agora</Button>
          </div>
        </div>
        {turisticPoints?.some(point => point.country === destination.country) && (
          <div className="tourist-attractions">
            <h2>Pontos Turísticos Recomendados</h2>
            <div className="attractions-grid">
              {turisticPoints
                .filter(point => point.country === destination.country)
                .map((point, index) => (
                  <div key={index} className="attraction-card">
                    <div className="attraction-image" style={{ backgroundImage: `url(${point.image})` }}>
                      <div className="overlay"></div>
                    </div>
                    <div className="attraction-content">
                      <h3>{point.title}</h3>
                      <p className="attraction-location">{point.city}</p>
                      <p className="attraction-description">{point.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationDetails;