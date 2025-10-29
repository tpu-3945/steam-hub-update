import React from 'react';
import '../assets/Modal.css';

const Modal = ({ onAccept }) => {
  return (
    <div className="modal-bg">
      <div className="modal-card">
        <i className="fas fa-exclamation-circle" style={{ color: '#facc15', fontSize: '3rem', marginBottom: '1rem' }}></i>
        <h2 className="orbitron" style={{ fontSize: '2rem', marginBottom: '1rem' }}>ATTENTION</h2>
        <p style={{ color: '#cbd5e1', marginBottom: '1.5rem' }}>
          Ce site est uniquement à but informatif. L'utilisation des manifests est sous votre entière responsabilité.
        </p>
        <button onClick={onAccept} className="orbitron neon-button">
          J'AI COMPRIS
        </button>
      </div>
    </div>
  );
};

export default Modal;
