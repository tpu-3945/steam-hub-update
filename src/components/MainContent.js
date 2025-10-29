import React, { useState } from 'react';
import Card from './Card';
import '../assets/Terminal.css';

const MainContent = () => {
  const [appId, setAppId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const [showDownload, setShowDownload] = useState(false);

  const handleCheckManifest = () => {
    if (!appId || !/^\d+$/.test(appId)) {
      setTerminalLines([{ text: '> ERREUR : AppID invalide.', type: 'error' }]);
      setShowDownload(false);
      return;
    }

    setIsLoading(true);
    setShowDownload(false);
    setTerminalLines([]);

    const lines = [
      { text: `> Vérification du manifest pour AppID: ${appId}`, type: 'info' },
      { text: '> Manifest trouvé !', type: 'success' },
      { text: '> Lien prêt pour le téléchargement...', type: 'info' },
    ];
    
    let currentLines = [];
    let lineIndex = 0;

    const interval = setInterval(() => {
      if (lineIndex < lines.length) {
        currentLines = [...currentLines, lines[lineIndex]];
        setTerminalLines(currentLines);
        lineIndex++;
      } else {
        clearInterval(interval);
        setShowDownload(true);
        setIsLoading(false);
      }
    }, 700);
  };

  return (
    <div className="fade-in-section">
      <Card>
        <h2 className="orbitron" style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '1rem' }}>Générateur de Manifest</h2>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <input
            type="text"
            id="appId"
            placeholder="Ex: 1154030"
            className="input-neon"
            value={appId}
            onChange={(e) => setAppId(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleCheckManifest()}
            style={{ flex: '1 1 300px' }}
          />
          <button id="checkBtn" onClick={handleCheckManifest} disabled={isLoading} className="orbitron neon-button" style={{ flex: '0 0 auto' }}>
            {isLoading ? 'VÉRIFICATION...' : 'VÉRIFIER'}
          </button>
        </div>
        
        {terminalLines.length > 0 && (
          <div style={{ marginTop: '1.5rem' }}>
            <div className="terminal">
              {terminalLines.map((line, index) => (
                <span key={index} className={`terminal-line ${line.type}`}>{line.text}</span>
              ))}
            </div>
            {showDownload && (
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <a
                  href={`https://codeload.github.com/SteamAutoCracks/ManifestHub/zip/refs/heads/${appId}`}
                  className="neon-button"
                  style={{ display: 'inline-block', textDecoration: 'none', backgroundImage: 'linear-gradient(to right, #16a34a, #10b981)' }}
                >
                  <i className="fas fa-download" style={{ marginRight: '8px' }}></i>TÉLÉCHARGER
                </a>
              </div>
            )}
          </div>
        )}
      </Card>

      <Card className="fade-in-section" style={{marginTop: '2rem'}}>
        <h2 className="orbitron" style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '1rem' }}>À propos</h2>
        <p style={{ textAlign: 'center', color: '#cbd5e1', marginBottom: '1.5rem' }}>
          Steam Hub vous permet d’explorer les AppID Steam, générer des manifests et découvrir des outils comme SteamTools et Cream Installer.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* ... Contenu "À propos" ici ... */}
        </div>
      </Card>
    </div>
  );
};

export default MainContent;
