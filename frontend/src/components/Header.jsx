import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ShoppingBag } from 'lucide-react';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Prevent background scrolling when menu drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [drawerOpen]);

  return (
    <>
      <header className="bc-header-minimal">
        <div className="bc-header-inner-minimal">
          
          {/* Top Left: Minimal 2-Line Hamburger Menu Toggle */}
          <div className="bc-header-left">
            <button 
              onClick={() => setDrawerOpen(!drawerOpen)} 
              className={`bc-minimal-menu-btn ${drawerOpen ? 'open' : ''}`}
              aria-label="Toggle navigation"
            >
              {drawerOpen ? <X size={24} color="#ffffff" /> : <Menu size={24} color="#ffffff" />}
            </button>
          </div>

          {/* Top Center: Signature Logo floating on transparent background */}
          <div className="bc-header-center">
            <Link to="/" className="bc-logo-link" aria-label="Best Cast Home" onClick={() => setDrawerOpen(false)}>
              <img 
                src="/logo/BCIL-Logo-Sept23-1.svg" 
                alt="Best Cast Logo" 
                className="bc-logo-img-minimal"
              />
            </Link>
          </div>

          {/* Top Right: Minimal Action Icon */}
          <div className="bc-header-right">
            <a href="mailto:sales@bestcastgroup.com" className="bc-minimal-icon-btn" aria-label="Contact Us" title="Contact Us">
              <ShoppingBag size={22} color="#ffffff" strokeWidth={1.6} />
            </a>
          </div>

        </div>
      </header>

      {/* Spyker-Inspired Full-Width Animated Navigation Drawer */}
      <div className={`bc-spyker-drawer-overlay ${drawerOpen ? 'bc-drawer-active' : ''}`}>
        <div className="bc-spyker-drawer-inner">
          <div className="bc-container bc-drawer-content-grid">
            
            {/* Left Section: Vertical Navigation Links & Contact Info */}
            <div className="bc-drawer-left-col">
              <span className="bc-drawer-subtitle">EXPLORE BESTCAST</span>
              <nav className="bc-drawer-nav-list">
                <NavLink to="/" onClick={() => setDrawerOpen(false)} className={({ isActive }) => `bc-drawer-link ${isActive ? 'active' : ''}`}>
                  <span>01</span> HOME <ArrowUpRight className="bc-drawer-link-arrow" size={20} />
                </NavLink>
                <NavLink to="/about-best-cast" onClick={() => setDrawerOpen(false)} className={({ isActive }) => `bc-drawer-link ${isActive ? 'active' : ''}`}>
                  <span>02</span> ABOUT COMPANY <ArrowUpRight className="bc-drawer-link-arrow" size={20} />
                </NavLink>
                <NavLink to="/capabilities" onClick={() => setDrawerOpen(false)} className={({ isActive }) => `bc-drawer-link ${isActive ? 'active' : ''}`}>
                  <span>03</span> CAPABILITIES & SOLUTIONS <ArrowUpRight className="bc-drawer-link-arrow" size={20} />
                </NavLink>
                <NavLink to="/industrial-applications" onClick={() => setDrawerOpen(false)} className={({ isActive }) => `bc-drawer-link ${isActive ? 'active' : ''}`}>
                  <span>04</span> INDUSTRIAL APPLICATIONS <ArrowUpRight className="bc-drawer-link-arrow" size={20} />
                </NavLink>
                <NavLink to="/gallery" onClick={() => setDrawerOpen(false)} className={({ isActive }) => `bc-drawer-link ${isActive ? 'active' : ''}`}>
                  <span>05</span> INFRASTRUCTURE GALLERY <ArrowUpRight className="bc-drawer-link-arrow" size={20} />
                </NavLink>
                <NavLink to="/careers" onClick={() => setDrawerOpen(false)} className={({ isActive }) => `bc-drawer-link ${isActive ? 'active' : ''}`}>
                  <span>06</span> CAREERS <ArrowUpRight className="bc-drawer-link-arrow" size={20} />
                </NavLink>
                <NavLink to="/enquiries" onClick={() => setDrawerOpen(false)} className={({ isActive }) => `bc-drawer-link ${isActive ? 'active' : ''}`}>
                  <span>07</span> CONTACT US <ArrowUpRight className="bc-drawer-link-arrow" size={20} />
                </NavLink>
              </nav>

              <div className="bc-drawer-footer-meta">
                <div className="bc-drawer-socials">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.62.77-1.62 1.56V12h2.74l-.44 3h-2.3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M21.58 7.19a2.76 2.76 0 0 0-1.94-1.96C17.93 4.7 12 4.7 12 4.7s-5.93 0-7.64.53A2.76 2.76 0 0 0 2.42 7.19C1.89 8.91 1.89 12 1.89 12s0 3.09.53 4.81c.3.1.92.74 1.94 1.96 1.71.53 7.64.53 7.64.53s5.93 0 7.64-.53c1.02-.3 1.64-.94 1.94-1.96.53-1.72.53-4.81.53-4.81s0-3.09-.53-4.81zM9.81 15.19V8.81L15.42 12l-5.61 3.19z"/></svg>
                  </a>
                </div>

                <div className="bc-drawer-contacts">
                  <div>
                    <span className="bc-meta-label">General Enquiries:</span>
                    <a href="mailto:sales@bestcastgroup.com">sales@bestcastgroup.com</a>
                  </div>
                  <div>
                    <span className="bc-meta-label">Direct Contact:</span>
                    <a href="tel:+917305423992">+91 73054 23992</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section: Featured Visual Showcase Card */}
            <div className="bc-drawer-right-col">
              <div className="bc-drawer-card">
                <div className="bc-drawer-card-badge">FEATURED CAPABILITY</div>
                <div className="bc-drawer-card-img-wrap">
                  <img 
                    src="/uploads/2023/06/Tool-Room-icon-1.png" 
                    alt="Precision Tool Room" 
                    className="bc-drawer-card-img" 
                  />
                </div>
                <div className="bc-drawer-card-body">
                  <h3>Advanced Investment Casting</h3>
                  <p>State-of-the-art tool room, AIAG key elements, APQP standards, and precision manufacturing solutions.</p>
                  <Link to="/capabilities" onClick={() => setDrawerOpen(false)} className="bc-drawer-card-link">
                    EXPLORE TOOLING & CASTING →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
