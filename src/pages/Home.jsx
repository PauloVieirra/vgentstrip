import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { ButtonDetails } from '../components/Btns';
import Card from '../components/Card';
import { useDestination } from '../context/DestinationContext';
import { destinations } from '../data/destinations';
import { flights } from '../data/aereas';
import '../styles/Styles.css';

const Home = () => {
  const navigate = useNavigate();
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);
  const [isLoading, setIsLoading] = useState(false);
  const { updateDestination } = useDestination();

  const handleDestinationChange = (destination) => {
    setIsLoading(true);
    setSelectedDestination(destination);

    const img = new Image();
    img.src = destination.image;
    img.onload = () => {
      setIsLoading(false);
    };
  };

  return (
    <div className='App'>
      <Navbar />
      <section className="hero-section" id="home" style={{ backgroundImage: `url(${selectedDestination.image})` }}>
        {isLoading && (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
          </div>
        )}
        <div className="hero-content">
          <h1 className='title'>{selectedDestination.title}</h1>
          <p className="hero-description">{selectedDestination.description}</p>
          <Button variant="deteils" onClick={() => {
            updateDestination({ id: selectedDestination.id });
            navigate(`/destination/${selectedDestination.id}`);
          }}>Conhecer →</Button>
        </div>

        <div className="destinations-scroll">
          {destinations.map((destination, index) => (
            <div 
              key={index} 
              className={`destination-card ${selectedDestination === destination ? 'active' : ''}`}
              onClick={() => handleDestinationChange(destination)}
              onMouseEnter={(e) => {
                const card = e.currentTarget;
                const container = card.parentElement;
                const cardRect = card.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const mouseX = e.clientX - containerRect.left;
                const edgeThreshold = 100;
                const maxScroll = container.scrollWidth - container.clientWidth;
                
                if (mouseX < edgeThreshold) {
                  const scrollAmount = Math.max(0, container.scrollLeft - container.clientWidth);
                  container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                } else if (mouseX > containerRect.width - edgeThreshold) {
                  const scrollAmount = Math.min(maxScroll, container.scrollLeft + container.clientWidth);
                  container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                } else {
                  const containerPadding = 16;
                  const scrollLeft = container.scrollLeft + (cardRect.left - containerRect.left - containerPadding) - (containerRect.width / 1.4) + (cardRect.width / 1.4);
                  if (scrollLeft >= 0 && scrollLeft <= maxScroll) {
                    container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
                  }
                }
              }}
            >
              <div className="destination-card-content">
                <img src={destination.imageCard} alt={destination.title} className='img-card' />
                <div className="destination-card-info">
                  <h3>{destination.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="container-line">
          <ButtonDetails variant="section"
            onClick={() => {
              document.getElementById('tours').scrollIntoView({ behavior: 'smooth' });
            }}
          >
          ↓
          </ButtonDetails>
        </div>
      </section>

      <section className="tours-section" id="tours">
        <h2>Nossos Voos</h2>
        <div className="tours-grid">
          {flights.map((flight, index) => (
            <Card
              key={index}
              image={flight.image}
              title={flight.title}
              description={`${flight.airline} - ${flight.duration} - R$${flight.price}`}
              textBtn="Check In"
            />
          ))}
        </div>
      </section>

      <section className="inspire-section" id="inspire">
        <div className="inspire-content">
          <h2>TRAVEL AND INSPIRE YOUR LIFE</h2>
          <Button variant="secondary" onClick={() => {}}>
            <i className="fas fa-play"></i> Watch Video
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;