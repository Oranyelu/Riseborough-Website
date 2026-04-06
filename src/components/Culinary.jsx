import React from 'react';
import './Culinary.css';

const Culinary = () => {
  return (
    <section className="section culinary-section" id="culinary">
      <div className="container">
        <div className="split-layout">
          <div className="culinary-content fade-in">
            <h2>The Culinary Experience</h2>
            <p className="culinary-body">
              A fully functional kitchen that makes you feel at home—or a private chef to handle the rest. We provide the tools; you choose the indulgence.
            </p>
            <div className="service-highlight">
              <span className="highlight-line"></span>
              <p>In-house private chef available upon request.</p>
            </div>
          </div>
          <div className="culinary-image-wrapper fade-in fade-in-delay-1">
            <img 
              src="/room_2.jpeg" 
              alt="Sleek modern fully functional luxury kitchen" 
              className="culinary-image"
              loading="lazy"
            />
            <div className="img-backdrop"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culinary;
