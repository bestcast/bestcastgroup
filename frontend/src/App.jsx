import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import IndustrialAppsPage from './pages/IndustrialAppsPage';
import InfrastructureGallery from './pages/InfrastructureGallery';
import ProductGalleryPage from './pages/ProductGalleryPage';
import CareersPage from './pages/CareersPage';
import EnquiriesPage from './pages/EnquiriesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import LegalPage from './pages/LegalPage';

import './styles/theme.css';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        
        <main style={{ flexGrow: 1 }}>
          <Routes>
            {/* Primary Navigation & Content Routes mapped from WordPress */}
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/about-best-cast" element={<AboutPage />} />
            <Route path="/capabilities" element={<CapabilitiesPage />} />
            <Route path="/industrial-applications" element={<IndustrialAppsPage />} />
            <Route path="/gallery" element={<InfrastructureGallery />} />
            <Route path="/product-gallery" element={<ProductGalleryPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/enquiries" element={<EnquiriesPage />} />
            
            {/* Blog & Articles */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />

            {/* Legal & Compliance */}
            <Route path="/privacy-policy" element={<LegalPage slug="privacy-policy" fallbackTitle="Privacy Policy" />} />
            <Route path="/disclaimer" element={<LegalPage slug="disclaimer" fallbackTitle="Disclaimer" />} />

            {/* 301 / Legacy WordPress Redirection Handlers */}
            <Route path="/contact" element={<Navigate to="/enquiries" replace />} />
            <Route path="/contact-us" element={<Navigate to="/enquiries" replace />} />
            <Route path="/about" element={<Navigate to="/about-best-cast" replace />} />

            {/* 404 Fallback */}
            <Route path="*" element={
              <div className="bc-container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', color: 'var(--bc-primary)', marginBottom: '1rem' }}>Page Not Found</h1>
                <p style={{ color: 'var(--bc-text-muted)', marginBottom: '2rem' }}>The requested page does not exist or has been moved.</p>
                <a href="/" className="bc-btn-primary" style={{ display: 'inline-flex' }}>Return to Homepage</a>
              </div>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
