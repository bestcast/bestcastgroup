import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroLottieBanner() {
  return (
    <section className="bc-hero-fullscreen-section">
      <div className="bc-hero-fullscreen-inner">
        
        {/* Sleek Dark Ambient Background Overlay */}
        <div className="bc-hero-dark-backdrop" />

        {/* Spyker Reference Matching Hero Typography Overlay */}
        <div className="bc-spyker-hero-overlay">
          <span className="bc-hero-sub-caption">
            THE BEGINNING OF BESTCAST
          </span>

          <h1 className="bc-hero-main-headline">
            THE NEXT CHAPTER OF <br />
            BESTCAST
          </h1>

          <div className="bc-hero-cta-wrap">
            <Link to="/capabilities" className="bc-spyker-rect-btn">
              DISCOVER BESTCAST MANUFACTURING SOLUTIONS
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
