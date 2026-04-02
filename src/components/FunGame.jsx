import React, { useState, useEffect } from 'react';
import './FunGame.css';

const UNIQUE_CARDS = ["☕ ₹1 Tea", "🍜 Maggi", "🍔 Burger", "🍹 Mojito"];

const shuffleCards = () => {
  const paired = [...UNIQUE_CARDS, ...UNIQUE_CARDS];
  return paired.sort(() => Math.random() - 0.5);
};

const FunGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    setCards(shuffleCards());
  }, []);

  const handleCardClick = (index) => {
    // Prevent clicking if 2 cards are already open, or if card is already matched/flipped
    if (flippedIndices.length === 2 || flippedIndices.includes(index) || matchedIndices.includes(index)) return;

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [firstIndex, secondIndex] = newFlipped;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedIndices([...matchedIndices, firstIndex, secondIndex]);
        setFlippedIndices([]);
      } else {
        setTimeout(() => {
          setFlippedIndices([]);
        }, 1000); // 1 second delay to memorize
      }
    }
  };

  const resetGame = () => {
    setCards(shuffleCards());
    setFlippedIndices([]);
    setMatchedIndices([]);
    setMoves(0);
  };

  const isWon = matchedIndices.length === cards.length && cards.length > 0;

  return (
    <section id="fun-game" className="game-section">
      <div className="game-container fade-in glass-panel">
        <div className="game-header">
          <h2 className="section-title text-gradient">Memory Match VIP</h2>
          <p>Match the culture items to unlock a secret luxury perk!</p>
          <div className="game-stats">
            <span>Moves: <strong className="text-gradient">{moves}</strong></span>
          </div>
        </div>
        
        {!isWon ? (
          <div className="memory-board">
            {cards.map((card, idx) => {
              const isFlipped = flippedIndices.includes(idx) || matchedIndices.includes(idx);
              return (
                <div 
                  key={idx} 
                  className={`memory-card ${isFlipped ? 'flipped' : ''} ${matchedIndices.includes(idx) ? 'matched' : ''}`}
                  onClick={() => handleCardClick(idx)}
                >
                  <div className="card-inner">
                    <div className="card-front glass-panel">
                      <span className="card-logo">CC</span>
                    </div>
                    <div className="card-back glass-panel">
                      <span className="card-text">{card}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="prize-reveal fade-in">
            <h3 className="text-gradient" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Vibe Check Passed!</h3>
            <p className="prize-text text-gradient">You matched them all!</p>
            <p className="prize-subtext" style={{marginTop: '1rem'}}>
              You clearly know the <b>Cup Culture</b> menu by heart. <br/>
              Completed in {moves} masterful moves!
            </p>
            <button className="btn-primary" onClick={resetGame} style={{marginTop: '2rem'}}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FunGame;
