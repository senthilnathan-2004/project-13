import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [dots, setDots] = useState('');

  // Cool animated pulse for the "Live Status"
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content fade-in">

        <h1 className="hero-title" style={{ textShadow: "0 2px 10px gray" }}>
          Good Vibes. <br /><span className="text-gradient highlight" style={{ textShadow: "none" }}>Chill Talks.</span>
        </h1>
        <p className="hero-subtitle">
          Budget-friendly feels starting with <br />
          <span className="price-tag glass-panel">₹10 Tea!</span> Yes, you read that right.
        </p>
        <p className="hero-description">
          Step into our exclusive lounge. Bring your gang, sip your chai, and make it your new premier hangout spot. Elite hospitality shouldn’t come with a heavy price tag.
        </p>
        <div className="hero-actions">
          <a href="#menu" className="btn-primary">Explore Menu</a>
          <a href="#footer" className="btn-secondary glass-panel glass-panel-hover" style={{ padding: '1rem 2rem', border: '1px solid var(--primary-color)', borderRadius: '30px', color: 'var(--primary-color)', fontWeight: 'bold' }}>Find Us</a>
        </div>
      </div>
      <div className="hero-image-wrapper fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="image-glow"></div>
        <img src="/3d_cup.png" alt="Cup Culture Emerald Interior" className="float-3d-asset" />
      </div>
    </section>
  );
};

export default Hero;
