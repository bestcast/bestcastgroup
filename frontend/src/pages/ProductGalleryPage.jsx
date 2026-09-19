import React, { useEffect, useState } from 'react';
import { Package, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CoverflowGallery from '../components/CoverflowGallery';

export default function ProductGalleryPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  const galleryItems = [
    { title: 'Valve Body Castings', subtext: 'CF8M Stainless Steel', src: '/uploads/2023/03/Stainless-Steel-Castings-400x516.jpg' },
    { title: 'Pump Impeller', subtext: 'Duplex & Super Duplex Steel', src: '/uploads/2023/03/Precision-Investment-Casting-2-400x516.jpg' },
    { title: 'Automotive Components', subtext: 'Alloy & Carbon Steel', src: '/uploads/2023/03/Precision-Investment-Casting-3-400x516.jpg' },
    { title: 'Flow Meter Housings', subtext: 'High-Integrity Pressure Castings', src: '/uploads/2023/03/Stainless-Steel-Castings-2-400x516.jpg' },
    { title: 'Sanitary Fittings', subtext: 'Electropolished Mirror Finish', src: '/uploads/2023/03/Precision-Investment-Casting-400x516.jpg' },
  ];

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setProducts(data.data);
        }
      })
      .catch(err => console.error('Error fetching products:', err))
      .finally(() => setLoading(false));
  }, []);

  const categories = ['All', 'Valves & Flow Control', 'Pumps & Fluid Handling', 'Automotive & Commercial Vehicles', 'Pipeline Instrumentation', 'Food, Dairy & Pharma'];

  const filtered = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <div>
      <div className="bc-page-hero">
        <div className="bc-container">
          <span style={{ color: 'var(--bc-orange)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.9rem' }}>
            Portfolio of Excellence
          </span>
          <h1 className="bc-page-hero-title">
            Product Gallery
          </h1>
          <p className="bc-page-hero-desc">
            High-integrity lost wax investment castings manufactured for critical mission applications.
          </p>
        </div>
      </div>

      {/* Featured Auto & Manual Swipe Product Coverflow Gallery */}
      <section style={{ padding: '3.5rem 0 1rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
        <div className="bc-container" style={{ textAlign: 'center' }}>
          <span style={{ color: 'var(--bc-orange)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700, fontSize: '0.85rem' }}>
            Interactive Showcase
          </span>
          <h2 className="bc-section-title-clean" style={{ marginBottom: '1rem' }}>FEATURED PRODUCTS</h2>
          <CoverflowGallery items={galleryItems} autoPlayInterval={3800} />
        </div>
      </section>

      <section className="bc-section">
        <div className="bc-container">
          {/* Category Filter */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '3rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: '30px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: '1px solid var(--bc-border)',
                  backgroundColor: activeCategory === cat ? 'var(--bc-primary)' : '#ffffff',
                  color: activeCategory === cat ? '#ffffff' : 'var(--bc-primary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--bc-text-muted)' }}>Loading products...</div>
          ) : (
            <div className="bc-grid-3">
              {filtered.map((item, idx) => (
                <div key={idx} className="bc-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    height: '220px',
                    background: 'linear-gradient(135deg, #1e293b, #334155)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                  }}>
                    <Package size={52} color="var(--bc-accent)" />
                  </div>
                  <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--bc-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.3rem' }}>
                      {item.category}
                    </span>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--bc-primary)', marginBottom: '0.8rem' }}>
                      {item.title}
                    </h3>
                    
                    <div style={{ fontSize: '0.88rem', color: 'var(--bc-text-muted)', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <div><strong>Material:</strong> {item.material}</div>
                      <div><strong>Weight Range:</strong> {item.weightRange}</div>
                      <div><strong>Industry:</strong> {item.industry}</div>
                    </div>

                    {item.features && item.features.length > 0 && (
                      <ul style={{ fontSize: '0.85rem', color: 'var(--bc-text-muted)', paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
                        {item.features.map((feat, fIndex) => (
                          <li key={fIndex}>{feat}</li>
                        ))}
                      </ul>
                    )}

                    <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--bc-border)' }}>
                      <Link to="/enquiries" className="bc-btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.6rem 1rem' }}>
                        <span>Request Component Quote</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
