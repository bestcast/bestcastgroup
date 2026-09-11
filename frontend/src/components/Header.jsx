import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Mail, Smartphone, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bc-header">
      <div className="bc-container bc-header-inner">
        {/* Origin Best Cast Logo from @migration/logo */}
        <Link to="/" className="bc-logo-link" aria-label="Best Cast Home">
          <img 
            src="/logo/BCIL-Logo-Sept23-1.svg" 
            alt="Best Cast Logo" 
            className="bc-logo-img"
          />
        </Link>

        {/* Navigation Links & Action Icons matching origin screenshot */}
        <nav className="bc-nav">
          <ul className="bc-nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => `bc-nav-link ${isActive ? 'active' : ''}`}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-best-cast" className={({ isActive }) => `bc-nav-link ${isActive ? 'active' : ''}`}>
                COMPANY
              </NavLink>
            </li>
            <li>
              <NavLink to="/capabilities" className={({ isActive }) => `bc-nav-link ${isActive ? 'active' : ''}`}>
                CAPABILITIES
              </NavLink>
            </li>
            <li>
              <NavLink to="/industrial-applications" className={({ isActive }) => `bc-nav-link ${isActive ? 'active' : ''}`}>
                INDUSTRIES
              </NavLink>
            </li>
            <li>
              <NavLink to="/enquiries" className={({ isActive }) => `bc-nav-link ${isActive ? 'active' : ''}`}>
                CONTACT US
              </NavLink>
            </li>
          </ul>

          {/* Vertical Separator Line */}
          <div className="bc-nav-divider" />

          {/* Contact Icons: Mail & Mobile Phone with divider lines */}
          <div className="bc-header-icons">
            <a href="mailto:sales@bestcastgroup.com" className="bc-icon-link" aria-label="Email Us" title="Email Us">
              <Mail size={20} strokeWidth={1.8} />
            </a>
            <div className="bc-nav-divider-sm" />
            <a href="tel:+917305423992" className="bc-icon-link" aria-label="Call Us" title="Call Us">
              <Smartphone size={20} strokeWidth={1.8} />
            </a>
          </div>
        </nav>

        {/* Mobile Hamburger Menu Toggle */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)} 
          className="bc-mobile-toggle"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="bc-mobile-dropdown">
          <div className="bc-mobile-logo-wrap">
            <img src="/logo/logo-mobile-menu-10-Sept.svg" alt="Best Cast" className="bc-mobile-logo" />
          </div>
          <NavLink to="/" onClick={() => setMobileOpen(false)} className={({ isActive }) => `bc-mobile-nav-link ${isActive ? 'active' : ''}`}>
            HOME
          </NavLink>
          <NavLink to="/about-best-cast" onClick={() => setMobileOpen(false)} className={({ isActive }) => `bc-mobile-nav-link ${isActive ? 'active' : ''}`}>
            COMPANY
          </NavLink>
          <NavLink to="/capabilities" onClick={() => setMobileOpen(false)} className={({ isActive }) => `bc-mobile-nav-link ${isActive ? 'active' : ''}`}>
            CAPABILITIES
          </NavLink>
          <NavLink to="/industrial-applications" onClick={() => setMobileOpen(false)} className={({ isActive }) => `bc-mobile-nav-link ${isActive ? 'active' : ''}`}>
            INDUSTRIES
          </NavLink>
          <NavLink to="/enquiries" onClick={() => setMobileOpen(false)} className={({ isActive }) => `bc-mobile-nav-link ${isActive ? 'active' : ''}`}>
            CONTACT US
          </NavLink>
          <div className="bc-mobile-contact-icons">
            <a href="mailto:sales@bestcastgroup.com" className="bc-icon-link">
              <Mail size={18} /> sales@bestcastgroup.com
            </a>
            <a href="tel:+917305423992" className="bc-icon-link">
              <Smartphone size={18} /> +91 73054 23992
            </a>
          </div>
        </div>
      )}

      {/* Angled Cross Divider Below Navbar matching origin sample */}
      <div className="bc-header-cross-divider">
        <svg 
          viewBox="0 0 1920 28" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none"
        >
          <polygon points="0,0 1920,0 1920,14 0,28" fill="#cbd5e1" opacity="0.6" />
          <polygon points="0,0 1920,0 1920,9 0,21" fill="#e2e8f0" />
          <polygon points="0,0 1920,0 1920,4 0,14" fill="#ffffff" />
        </svg>
      </div>
    </header>
  );
}
