import React from 'react';
import Card from './Card';

const TutorialContent = () => {
  return (
    <div className="fade-in-section" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Card>
        <h2 className="orbitron" style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '1rem' }}>Installer SteamTools</h2>
        <p style={{ textAlign: 'center', color: '#cbd5e1', marginBottom: '1rem' }}>
          Téléchargez SteamTools : <a href="https://www.steamtools.net" target="_blank" rel="noopener noreferrer" style={{ color: '#a78bfa' }}>steamtools.net</a>
        </p>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '0.5rem' }}>
            <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://www.youtube.com/embed/hiqiYMgEc_I" 
                title="Tuto SteamTools" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
      </Card>
      
      <Card>
        <h2 className="orbitron" style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '1rem' }}>Installer Cream Installer</h2>
        <p style={{ textAlign: 'center', color: '#cbd5e1', marginBottom: '1rem' }}>
          Téléchargez Cream Installer : <a href="https://drive.google.com/file/d/1OSOAImJH08nTJcr29NjqXofeX5FqxYTc/view" target="_blank" rel="noopener noreferrer" style={{ color: '#a78bfa' }}>Google Drive</a>
        </p>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '0.5rem' }}>
            <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://www.youtube.com/embed/8Wve5zvPcv8" 
                title="Tuto Cream Installer" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
      </Card>
    </div>
  );
};

export default TutorialContent;
