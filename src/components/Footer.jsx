import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
      <div className="footer-container glass-panel fade-in">
        <div className="footer-content">
          <div className="footer-info">
            <h2 className="footer-logo text-gradient">Cup Culture</h2>
            <p className="footer-desc">
              Your neighborhood spot for good vibes, chill talks, and budget-friendly feels.
            </p>
            <div className="footer-hours">
              <h3>Hours</h3>
              <p>Mon - Sun</p>
              <p className="highlight-hours text-gradient">11:00 AM - 11:00 PM</p>
              <div className="services">
                <span>✓ Dine-in</span>
                <span>✓ Drive-through</span>
                <span>✓ No-contact delivery</span>
              </div>
            </div>
          </div>
          
          <div className="footer-location">
            <h3>Find Us Here</h3>
            <p>32FC+V5, T-Nagar, Villankurichi</p>
            <p>Coimbatore, Tamil Nadu 641035</p>
            <a href="https://maps.app.goo.gl/uqDPmNX2L9oMDmoM7" target="_blank" rel="noreferrer" className="directions-link">
              Open in Google Maps →
            </a>
            
            {/* Google Map Embedded Iframe */}
            <div className="map-container">
              <iframe 
                src="https://maps.google.com/maps?q=11.0746638,77.0203844&t=m&z=15&output=embed&iwloc=near" 
                title="Cup Culture Location"
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0"
                className="google-map-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Cup Culture. All Rights Reserved. Built with React.</p>
      </div>
    </footer>
  );
};

export default Footer;
