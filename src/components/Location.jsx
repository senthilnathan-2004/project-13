import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <section id="location" className="location-section">
      <div className="location-container glass-panel fade-in">
        
        <div className="location-info">
          <h2 className="section-title text-gradient" style={{marginBottom: '1.5rem', textAlign: 'left'}}>Find Us</h2>
          <p className="location-desc">
            Your new luxurious hangout spot is right around the corner. Come experience premium hospitality in Vilankurichi.
          </p>
          
          <div className="location-details">
            <div className="detail-item">
              <span className="icon text-gradient">📍</span>
              <div>
                <h4>Address</h4>
                <p>Cup Culture<br/>Vilankurichi, Coimbatore<br/>Tamil Nadu 641035</p>
              </div>
            </div>
            
            <div className="detail-item">
              <span className="icon text-gradient">🕰️</span>
              <div>
                <h4>Opening Hours</h4>
                <p>Mon - Sun: 10:00 AM - 11:00 PM</p>
                <span className="status-open">🟢 Open Now</span>
              </div>
            </div>
            
            <div className="detail-item">
              <span className="icon text-gradient">📞</span>
              <div>
                <h4>Contact</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>
          
          <a href="https://www.google.com/maps/place/11%C2%B004'28.8%22N+77%C2%B001'13.4%22E/@11.0746638,77.0203844,17z/" target="_blank" rel="noreferrer" className="btn-primary" style={{display: 'inline-block', marginTop: '1rem'}}>
            Get Directions
          </a>
        </div>

        <div className="location-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1956.1264353232062!2d77.0203844!3d11.0746638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDA0JzI4LjgiTiA3N8KwMDEnMTMuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border:0, borderRadius: '15px'}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Cup Culture Live Google Map"
          ></iframe>
        </div>
        
      </div>
    </section>
  );
};

export default Location;
