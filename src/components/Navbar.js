import React from 'react';
import '../assets/Navbar.css';

const Navbar = ({ activePage, onNavigate }) => {
  return (
    <nav className="navbar">
      <a href="#main" className={`nav-link ${activePage === 'main' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); onNavigate('main'); }}>
        Accueil
      </a>
      <a href="#tuto" className={`nav-link ${activePage === 'tuto' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); onNavigate('tuto'); }}>
        Tutos
      </a>
    </nav>
  );
};

export default Navbar;
