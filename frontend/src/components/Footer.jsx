import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      {/* Dual Gradient Green-Orange Banner matching screenshots */}
      <div className="bc-dual-footer">
        <div className="bc-container">
          {/* Centered Brand Headings */}
          <div className="bc-footer-center-content">
            <h3 className="bc-footer-company-name">BEST CAST IT LIMITED</h3>
            <div className="bc-footer-tagline">CAST YOUR IMAGINATION</div>
            <p className="bc-footer-commitment">
              Our commitment to exceptional service makes us the most trusted partner in the Die Casting industry.
            </p>
          </div>

          {/* Bottom Information Ribbon */}
          <div className="bc-footer-info-ribbon">
            {/* Follow Us */}
            <div className="bc-footer-info-item">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <span>FOLLOW US</span>
              </a>
            </div>

            {/* Email */}
            <div className="bc-footer-info-item">
              <Mail size={16} />
              <a href="mailto:sales@bestcastgroup.com">sales@bestcastgroup.com</a>
            </div>

            {/* Phone */}
            <div className="bc-footer-info-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Phone size={14} />
                <a href="tel:+917305423992">+91 73054 23992</a>
              </div>
              <div style={{ paddingLeft: '1.2rem' }}>
                <a href="tel:+917305410992">+91 73054 10992</a>
              </div>
            </div>

            {/* Hours */}
            <div className="bc-footer-info-item">
              <Clock size={16} />
              <div>
                <div style={{ fontWeight: 600 }}>Business Hours</div>
                <div style={{ opacity: 0.9 }}>Mon to Sat – 9 am to 6 pm IST</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer Bottom Bar */}
      <div className="bc-sub-footer">
        <div className="bc-container bc-sub-footer-inner">
          <div>
            Copyright © 2026 | BestCast | bestcastgroup.com | All Rights Reserved
          </div>
          <div className="bc-sub-footer-links">
            <Link to="/">Home</Link>
            <span>|</span>
            <Link to="/capabilities">Capabilities</Link>
            <span>|</span>
            <Link to="/industrial-applications">Industries</Link>
            <span>|</span>
            <Link to="/disclaimer">Disclaimer</Link>
            <span>|</span>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
