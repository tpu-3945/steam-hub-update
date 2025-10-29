import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '2rem', color: '#94a3b8' }}>
      <p>© {new Date().getFullYear()} Steam Hub | Tous droits réservés par <span>Steam Solution</span></p>
      <p style={{ fontSize: '0.875rem' }}>Non affilié à Valve, Steam ou à tout autre produit Valve.</p>
    </footer>
  );
};

export default Footer;
