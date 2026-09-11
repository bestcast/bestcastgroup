import React, { useState } from 'react';
import { Factory, Eye } from 'lucide-react';

export default function InfrastructureGallery() {
  const facilities = [
    { title: 'Tool Room & CAD/CAM Die Manufacturing', category: 'Tooling', image: '/uploads/2023/06/infra-toolroom.jpg', desc: 'CNC machining center for producing high-precision aluminum wax dies with zero tooling draft variance.' },
    { title: 'Hydraulic Wax Pattern Injection Presses', category: 'Pattern Making', image: '/uploads/2023/06/infra-wax.jpg', desc: 'Semi-automatic temperature controlled wax injection machines ensuring consistent dimensional shrinkage.' },
    { title: 'Robotic Shell Building Cells', category: 'Shell Room', image: '/uploads/2023/06/infra-robotics.jpg', desc: 'Climate-controlled multi-tier robotic dipping arms providing uniform ceramic coating and rapid dehumidified drying.' },
    { title: 'Induction Melting Power Track & Furnaces', category: 'Foundry', image: '/uploads/2023/06/infra-furnace.jpg', desc: 'Medium-frequency dual-track induction furnaces for clean, degassed, high-temperature alloy melting.' },
    { title: 'Heat Treatment SCADA Furnaces', category: 'Heat Treatment', image: '/uploads/2023/06/infra-heattreat.jpg', desc: 'Computerized solution annealing, normalizing, quenching, and tempering furnaces with temperature data loggers.' },
    { title: 'CNC & VMC Precision Machine Shop', category: 'Machining', image: '/uploads/2023/06/infra-cnc.jpg', desc: 'High-speed vertical machining centers and CNC turning for supplying fully finished ready-to-assemble components.' },
    { title: 'Optical Emission Spectrometer & Metallurgy Lab', category: 'Quality Testing', image: '/uploads/2023/06/infra-lab.jpg', desc: '28-channel Optical Emission Spectrometer ensuring strict chemical composition before and after heat pouring.' },
    { title: '3D Coordinate Measuring Machine (CMM)', category: 'Metrology', image: '/uploads/2023/06/infra-cmm.jpg', desc: 'High-accuracy CMM inspection station verifying micron-level geometric tolerances against CAD models.' }
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Tooling', 'Shell Room', 'Foundry', 'Machining', 'Quality Testing'];

  const filtered = activeFilter === 'All' ? facilities : facilities.filter(f => f.category === activeFilter);

  return (
    <div>
      <div className="bc-page-hero">
        <div className="bc-container">
          <span style={{ color: 'var(--bc-orange)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.9rem' }}>
            Foundry Tour
          </span>
          <h1 className="bc-page-hero-title">
            Infrastructure Gallery
          </h1>
          <p className="bc-page-hero-desc">
            A state-of-the-art 150,000 sq. ft. foundry plant engineered for high-volume precision casting production.
          </p>
        </div>
      </div>

      <section className="bc-section">
        <div className="bc-container">
          {/* Filters */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '3rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: '30px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: '1px solid var(--bc-border)',
                  backgroundColor: activeFilter === cat ? 'var(--bc-primary)' : '#ffffff',
                  color: activeFilter === cat ? '#ffffff' : 'var(--bc-primary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="bc-grid-3">
            {filtered.map((item, idx) => (
              <div key={idx} className="bc-card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{
                  height: '220px',
                  background: 'linear-gradient(135deg, #1e293b, #0f172a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  position: 'relative'
                }}>
                  <Factory size={48} color="var(--bc-accent)" />
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(7, 37, 64, 0.85)',
                    color: 'var(--bc-gold)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {item.category}
                  </span>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--bc-primary)', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--bc-text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
