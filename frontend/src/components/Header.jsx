import React from 'react';
import { Layers, Database, CheckCircle2 } from 'lucide-react';

const Header = ({ isOnline = true }) => {
  return (
    <header className="header-bar glass-panel">
      <div className="brand-container">
        <div className="brand-logo">
          <Layers size={24} />
        </div>
        <div>
          <h1 className="brand-title">Task Flow</h1>
          <p className="brand-subtitle">MERN Stack CRUD Application</p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div className="status-badge">
          <span className="pulse-dot"></span>
          <span>{isOnline ? 'MongoDB Backend Active' : 'Connecting...'}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
