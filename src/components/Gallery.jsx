import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { src: "/living_area.jpeg", alt: "Grand Main Living Area" },
    { src: "/relaxation_area.jpeg", alt: "Family Relaxation Lounge" },
    { src: "/room_1.jpeg", alt: "Luxurious En-suite Bedroom" },
    { src: "/main_tv_console.jpeg", alt: "Modern TV Console and Entertainment Setup" }
  ];

  return (
    <section className="section gallery-section" id="space">
      <div className="container">
        <div className="gallery-header fade-in">
          <h2>Space for the Whole Circle.</h2>
          <p className="gallery-description">
            A masterclass in modern living. 4 Bedrooms (all en-suite), a grand main living area, and a private family lounge upstairs for moments of quiet reflection.
          </p>
        </div>
        
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className={`gallery-item fade-in fade-in-delay-${(index % 3) + 1}`} key={index}>
              <div className="img-container">
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="img-overlay">
                  <span>{img.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
