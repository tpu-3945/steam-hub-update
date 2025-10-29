import React, { useState, useEffect } from 'react';
import BackgroundParticles from './components/BackgroundParticles';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import TutorialContent from './components/TutorialContent';
import Footer from './components/Footer';
import Modal from './components/Modal';
import './styles/App.css';

function App() {
  const [activePage, setActivePage] = useState('main');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('disclaimerAccepted') !== 'true') {
      setShowModal(true);
    }
  }, []);

  const handleAcceptModal = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setShowModal(false);
  };

  return (
    <div className="app-container">
      <BackgroundParticles />
      {showModal && <Modal onAccept={handleAcceptModal} />}
      
      <div className="content-wrapper">
        <Header />
        <Navbar activePage={activePage} onNavigate={setActivePage} />
        
        <main>
          {activePage === 'main' ? <MainContent /> : <TutorialContent />}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
