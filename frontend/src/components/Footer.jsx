import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Clock, MapPin, ChevronRight, Award, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bc-modern-footer">
      {/* 1. Top Call to Action Ribbon */}
      <div className="bc-footer-cta-ribbon">
        <div className="bc-container">
          <div className="bc-footer-cta-inner">
            <div className="bc-footer-cta-text">
              <span className="bc-footer-cta-pill">GLOBAL DIE CASTING PARTNER</span>
              <h3>Ready to Elevate Your Component Precision?</h3>
              <p>Connect with our engineering experts for customized casting, prototyping, and high-volume CNC solutions.</p>
            </div>
            <Link to="/enquiries" className="bc-footer-cta-btn">
              <span>Request a Quote</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Body */}
      <div className="bc-footer-main">
        <div className="bc-container">
          <div className="bc-footer-grid">
            {/* Col 1: Brand & Certifications */}
            <div className="bc-footer-col bc-footer-brand-col">
              <div className="bc-footer-logo-wrap">
                <span className="bc-footer-logo-text">BEST CAST</span>
                <span className="bc-footer-logo-sub">GROUP</span>
              </div>
              <p className="bc-footer-about">
                Pioneering high-precision gravity die casting, tooling, and CNC machining solutions for global automotive and industrial leaders since 1974.
              </p>
              
              <div className="bc-footer-cert-badges">
                <div className="bc-cert-badge">
                  <ShieldCheck size={16} className="bc-cert-icon" />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="bc-cert-badge">
                  <Award size={16} className="bc-cert-icon" />
                  <span>IATF 16949:2016</span>
                </div>
              </div>

              <div className="bc-footer-socials">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="bc-social-link"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a 
                  href="mailto:sales@bestcastgroup.com" 
                  aria-label="Email Us"
                  className="bc-social-link"
                >
                  <Mail size={18} />
                </a>
                <a 
                  href="tel:+917305423992" 
                  aria-label="Call Us"
                  className="bc-social-link"
                >
                  <Phone size={18} />
                </a>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="bc-footer-col">
              <h4 className="bc-footer-heading">Company Navigation</h4>
              <ul className="bc-footer-links">
                <li>
                  <Link to="/">
                    <ChevronRight size={14} />
                    <span>Home Page</span>
                  </Link>
                </li>
                <li>
                  <Link to="/company">
                    <ChevronRight size={14} />
                    <span>About Best Cast</span>
                  </Link>
                </li>
                <li>
                  <Link to="/capabilities">
                    <ChevronRight size={14} />
                    <span>Manufacturing Capabilities</span>
                  </Link>
                </li>
                <li>
                  <Link to="/industrial-applications">
                    <ChevronRight size={14} />
                    <span>Industries Served</span>
                  </Link>
                </li>
                <li>
                  <Link to="/enquiries">
                    <ChevronRight size={14} />
                    <span>Customer & Supplier Enquiry</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <ChevronRight size={14} />
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Key Solutions */}
            <div className="bc-footer-col">
              <h4 className="bc-footer-heading">Capabilities & Solutions</h4>
              <ul className="bc-footer-links">
                <li>
                  <Link to="/capabilities#design">
                    <ChevronRight size={14} />
                    <span>Design Engineering & NPD</span>
                  </Link>
                </li>
                <li>
                  <Link to="/capabilities#toolroom">
                    <ChevronRight size={14} />
                    <span>In-House Tool Room</span>
                  </Link>
                </li>
                <li>
                  <Link to="/capabilities#gdc">
                    <ChevronRight size={14} />
                    <span>Gravity Die Casting (GDC)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/capabilities#cnc">
                    <ChevronRight size={14} />
                    <span>Precision CNC Machining</span>
                  </Link>
                </li>
                <li>
                  <Link to="/capabilities#heattreat">
                    <ChevronRight size={14} />
                    <span>Heat Treatment Facility</span>
                  </Link>
                </li>
                <li>
                  <Link to="/capabilities#inspection">
                    <ChevronRight size={14} />
                    <span>NDT & CMM Inspection</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Operations */}
            <div className="bc-footer-col bc-footer-contact-col">
              <h4 className="bc-footer-heading">Get in Touch</h4>
              <div className="bc-footer-contact-list">
                <div className="bc-footer-contact-item">
                  <MapPin size={18} className="bc-contact-icon" />
                  <div>
                    <strong>Best Cast Group Plant</strong>
                    <p>Industrial Estate, Chennai, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="bc-footer-contact-item">
                  <Mail size={18} className="bc-contact-icon" />
                  <div>
                    <strong>Sales & Inquiries</strong>
                    <a href="mailto:sales@bestcastgroup.com">sales@bestcastgroup.com</a>
                  </div>
                </div>

                <div className="bc-footer-contact-item">
                  <Phone size={18} className="bc-contact-icon" />
                  <div>
                    <strong>Direct Phones</strong>
                    <div className="bc-phone-numbers">
                      <a href="tel:+917305423992">+91 73054 23992</a>
                      <a href="tel:+917305410992">+91 73054 10992</a>
                    </div>
                  </div>
                </div>

                <div className="bc-footer-contact-item">
                  <Clock size={18} className="bc-contact-icon" />
                  <div>
                    <strong>Working Hours</strong>
                    <p>Mon – Sat: 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Sub-Footer Bar */}
      <div className="bc-footer-bottom">
        <div className="bc-container">
          <div className="bc-footer-bottom-inner">
            <div className="bc-footer-copyright">
              © {new Date().getFullYear()} <strong>Best Cast Group</strong>. All Rights Reserved.
            </div>
            <div className="bc-footer-legal-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span className="bc-legal-divider">•</span>
              <Link to="/disclaimer">Disclaimer</Link>
              <span className="bc-legal-divider">•</span>
              <Link to="/terms">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
