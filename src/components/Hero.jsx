import React from 'react';
import './Hero.css';

const Hero = ({ onOpenBooking }) => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-background">
        {/* Placeholder for immersive video overlay */}
        <div className="hero-overlay"></div>
        <img 
          src="/living_area_2nd_view.jpeg" 
          alt="Cinematic loop of golden hour sunlight hitting architectural textures" 
          className="hero-media"
        />
      </div>
      <div className="hero-content">
        <h1 className="hero-headline fade-in">RISEBOROUGH.</h1>
        <p className="hero-subheadline fade-in fade-in-delay-1">
          Your Uninterrupted Sanctuary in Centenary Golf City.
        </p>
        <div className="hero-buttons fade-in fade-in-delay-2">
          <button 
            className="btn-primary"
            onClick={onOpenBooking}
          >
            Check Availability & Book
          </button>
          <button 
            className="btn-secondary"
            onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Riseborough+Apartments,+Enugu,+Nigeria', '_blank')}
          >
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
