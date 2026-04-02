import React from 'react';
import './Reviews.css';

const reviewsData = [
  { name: "Thangapandi", date: "4 hours ago", text: "Good taste♨️ Food was excellent and I enjoyed the Atmosphere here. Like to come further here...", rating: 5 },
  { name: "Pradeep", date: "4 hours ago", text: "Good service and good taste. Food: 5 Service: 5. Perfect place to chill.", rating: 5 },
  { name: "Vijay Sankar", date: "a day ago", text: "Tasty food, friendly staff, and perfect place to chill. Good ambience prices for affordable much better quality.", rating: 5 },
  { name: "Karthi K.", date: "2 days ago", text: "Best spot in town to vibe with friends! The ₹1 tea offer is unbeatable. Super aesthetic.", rating: 5 },
  { name: "Sneha R.", date: "1 week ago", text: "Amazing fries and peri peri momos. Will definitely visit again with my college gang.", rating: 5 },
];

const Reviews = () => {
  // Duplicate array to make the infinite scroll smooth without jumps
  const duplicatedReviews = [...reviewsData, ...reviewsData];

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-header fade-in">
        <h2 className="section-title text-gradient">What Our Customers Say</h2>
        <div className="rating-summary">
          <span className="rating-score text-gradient">5.0</span>
          <div className="stars">★★★★★</div>
          <span className="rating-count">Based on 36 Google Reviews</span>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-content">
          {duplicatedReviews.map((review, idx) => (
            <div key={idx} className="review-card glass-panel">
              <div className="review-top">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">{review.name.charAt(0)}</div>
                  <div>
                    <h4 className="reviewer-name">{review.name}</h4>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
                <div className="review-stars">★★★★★</div>
              </div>
              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
