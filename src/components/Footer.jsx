import React from 'react';
import { Activity, Wifi, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        <div className="footer-info">
          <h3 className="footer-logo">RISEBOROUGH.</h3>
          <p className="footer-address">
            53 Citiville Estate, <br />
            Centenary Golf City, Enugu
          </p>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram: @RiseboroughApartments
            </a>
          </div>
        </div>

        <div className="footer-widget">
          <h4>Sanctuary Real-Time Status</h4>
          <div className="status-list">
            <div className="status-item">
              <Activity className="status-icon" size={20} />
              <div className="status-text">
                <span className="status-label">Power</span>
                <span className="status-value">100% (Lithium Backup Active)</span>
              </div>
            </div>
            <div className="status-item">
              <Wifi className="status-icon" size={20} />
              <div className="status-text">
                <span className="status-label">Internet</span>
                <span className="status-value">Optimal (Starlink)</span>
              </div>
            </div>
            <div className="status-item">
              <MapPin className="status-icon" size={20} />
              <div className="status-text">
                <span className="status-label">Location</span>
                <span className="status-value">
                  Centenary City, Enugu <br />
                  <button 
                    className="btn-directions" 
                    onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Riseborough+Apartments,+Enugu,+Nigeria', '_blank')}
                  >
                    Get Directions
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Riseborough Apartments. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
