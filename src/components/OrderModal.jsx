import React, { useState } from 'react';
import './OrderModal.css';

const OrderModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setSubmitted(false);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      toggleModal();
    }, 2500);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button className="fab-button glass-panel glass-panel-hover" onClick={toggleModal} aria-label="Book a Table">
        <span className="fab-icon">☕</span>
        <span className="fab-text">Pre-Order / Book</span>
      </button>

      {/* Glassmorphic Modal overlay */}
      <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={toggleModal}>
        <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={toggleModal}>&times;</button>
          
          {!submitted ? (
            <div className="modal-form-container">
              <h2 className="text-gradient">Book Your Spot</h2>
              <p>Reserve a table and pre-order your ₹1 Tea!</p>
              
              <form onSubmit={handleSubmit} className="order-form">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" required placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" required placeholder="+91" />
                </div>
                <div className="form-group">
                  <label>Date & Time</label>
                  <input type="datetime-local" required />
                </div>
                <div className="form-group">
                  <label>Reserve specific vibe?</label>
                  <select>
                    <option>Standard Table</option>
                    <option>Window Seat</option>
                    <option>Sofa Lounge</option>
                    <option>Large Group (Gang)</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '1rem'}}>Confirm VIP Table</button>
              </form>
            </div>
          ) : (
            <div className="modal-success fade-in">
              <div className="success-icon">✨</div>
              <h2 className="text-gradient">Reservation Confirmed!</h2>
              <p>Your vibes are secured. See you soon at Cup Culture!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderModal;
