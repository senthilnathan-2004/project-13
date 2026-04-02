import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import FunGame from './components/FunGame';
import Location from './components/Location';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <FunGame />
        <Menu />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <OrderModal />
    </div>
  );
}

export default App;
