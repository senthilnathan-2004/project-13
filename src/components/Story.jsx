import React, { useRef, useState } from 'react';
import './Story.css';

const Story = () => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  // 3D Tilt Effect tracking
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const box = cardRef.current.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    // Calculate rotation limits (-5deg to 5deg)
    const rotateY = ((x / box.width) - 0.5) * 10;
    const rotateX = ((y / box.height) - 0.5) * -10;
    
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'none'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`,
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
    });
  };

  return (
    <section id="story" className="story-section">
      <div 
        className="story-container glass-panel" 
        ref={cardRef}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="story-content">
          <h2 className="section-title text-gradient" style={{marginBottom: '1rem', textAlign: 'left'}}>Our Vibe</h2>
          <h3 className="story-subtitle text-gradient">A Word From The Owner</h3>
          <p className="story-text">
            "₹1 Tea?! Yes, you read that right! ☕🔥 At <strong>Cup Culture</strong>, we’re kicking things off with a vibe you can’t resist — tea for just ₹1! Because great conversations shouldn’t come with a heavy price tag 😉 Bring your gang, sip your chai, and make it your new hangout spot. Good vibes. Chill talks. Budget-friendly feels."
          </p>
          <div className="story-features">
            <span className="feature-pill glass-panel">🔥 Good Vibes</span>
            <span className="feature-pill glass-panel">☕ Chill Talks</span>
            <span className="feature-pill glass-panel">💰 Budget-Friendly</span>
          </div>
        </div>

        <div className="story-image-box">
          <div className="cube-wrapper">
             <img src="/green_cafe.png" alt="Cup Culture Emerald Themes" className="story-tea-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
