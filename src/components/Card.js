import React from 'react';
import '../assets/Card.css';

const Card = ({ children, className = '' }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
