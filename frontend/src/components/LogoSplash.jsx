import React, { useState, useEffect } from 'react';
import './LogoSplash.css';

export default function LogoSplash({ onComplete }) {
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Start exit animation after 1.8s
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 1800);

    // Hide completely after exit animation completes (2.5s total)
    const doneTimer = setTimeout(() => {
      setHidden(true);
      if (onComplete) onComplete();
    }, 2500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div className={`bc-splash-overlay ${exiting ? 'bc-splash-exit' : ''}`}>
      <div className="bc-splash-content">
        <div className="bc-splash-logo-container">
          <img 
            src="/logo/BCIL-Logo-Sept23-1.svg" 
            alt="Bestcast Group" 
            className="bc-splash-logo" 
          />
        </div>
        <div className="bc-splash-tagline">
          <span>PRECISION INVESTMENT CASTING</span>
        </div>
        <div className="bc-splash-loader-bar">
          <div className="bc-splash-loader-progress" />
        </div>
      </div>
    </div>
  );
}
