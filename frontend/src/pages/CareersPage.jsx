import React, { useState } from 'react';
import { Briefcase, CheckCircle, Upload, Mail, Phone, ArrowRight } from 'lucide-react';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Metallurgical Quality Engineer',
    message: ''
  });
  const [status, setStatus] = useState({ submitting: false, success: false, error: '' });

  const positions = [
    {
      title: 'Senior Metallurgical & Quality Assurance Engineer',
      dept: 'Quality & Testing Lab',
      exp: '4 - 8 Years',
      loc: 'Rajkot Plant',
      desc: 'Supervise optical spectrometer calibrations, heat treatment logs, microstructural evaluations, and NDT inspections (MPI / Ultrasonic).'
    },
    {
      title: 'CAD/CAM Tooling & Die Design Specialist',
      dept: 'Tool Room & Engineering',
      exp: '3 - 6 Years',
      loc: 'Rajkot Plant',
      desc: 'Expertise in SolidWorks/Unigraphics and casting solidification simulation (MAGMA/ProCAST) for aluminum wax injection die tooling.'
    },
    {
      title: 'Foundry Melting Supervisor (Induction Furnaces)',
      dept: 'Production & Melting',
      exp: '5 - 10 Years',
      loc: 'Rajkot Plant',
      desc: 'Manage medium-frequency induction furnace heat melts, deslagging, temperature pyrometry, and pouring of stainless and nickel base alloys.'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: '' });

    try {
      const res = await fetch('http://localhost:5000/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'career',
          subject: `Job Application: ${formData.position}`
        })
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ submitting: false, success: true, error: '' });
        setFormData({ name: '', email: '', phone: '', position: positions[0].title, message: '' });
      } else {
        setStatus({ submitting: false, success: false, error: data.message || 'Failed to submit application.' });
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: 'Network error. Please try again.' });
    }
  };

  return (
    <div>
      <div className="bc-page-hero">
        <div className="bc-container">
          <span style={{ color: 'var(--bc-orange)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.9rem' }}>
            Work With Us
          </span>
          <h1 className="bc-page-hero-title">
            Careers at Best Cast
          </h1>
          <p className="bc-page-hero-desc">
            Join a forward-thinking foundry team pushing the frontiers of precision investment casting.
          </p>
        </div>
      </div>

      <section className="bc-section">
        <div className="bc-container">
          <div className="bc-grid-2" style={{ alignItems: 'flex-start' }}>
            {/* Left: Open Positions */}
            <div>
              <span className="bc-section-subtitle">Current Openings</span>
              <h2 className="bc-section-title" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>
                Build Your Future in Precision Engineering
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {positions.map((pos, i) => (
                  <div key={i} className="bc-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
                      <h3 style={{ color: 'var(--bc-primary)', fontSize: '1.2rem', fontWeight: 700 }}>{pos.title}</h3>
                      <span style={{ backgroundColor: 'rgba(196,154,69,0.15)', color: 'var(--bc-accent-hover)', fontWeight: 700, fontSize: '0.8rem', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                        {pos.exp}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--bc-text-muted)', marginBottom: '0.8rem' }}>
                      <strong>Department:</strong> {pos.dept} | <strong>Location:</strong> {pos.loc}
                    </div>
                    <p style={{ color: 'var(--bc-text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                      {pos.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Application Form */}
            <div className="bc-card" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
              <h3 style={{ color: 'var(--bc-primary)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Submit Your Application
              </h3>
              <p style={{ color: 'var(--bc-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Apply directly to our HR department or send your CV to <strong>careers@bestcastgroup.com</strong>.
              </p>

              {status.success && (
                <div style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '1rem', borderRadius: '6px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={20} />
                  <span>Application received! Our HR team will contact shortlisted candidates.</span>
                </div>
              )}

              {status.error && (
                <div style={{ backgroundColor: '#fee2e2', color: '#b91c1c', padding: '1rem', borderRadius: '6px', marginBottom: '1.5rem' }}>
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.3rem', color: 'var(--bc-primary)' }}>Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--bc-border)', borderRadius: '4px', fontSize: '0.95rem' }}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="bc-form-row">
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.3rem', color: 'var(--bc-primary)' }}>Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--bc-border)', borderRadius: '4px', fontSize: '0.95rem' }}
                      placeholder="name@example.com"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.3rem', color: 'var(--bc-primary)' }}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--bc-border)', borderRadius: '4px', fontSize: '0.95rem' }}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.3rem', color: 'var(--bc-primary)' }}>Position Applied For</label>
                  <select
                    value={formData.position}
                    onChange={e => setFormData({ ...formData, position: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--bc-border)', borderRadius: '4px', fontSize: '0.95rem', backgroundColor: '#ffffff' }}
                  >
                    {positions.map((p, i) => (
                      <option key={i} value={p.title}>{p.title}</option>
                    ))}
                    <option value="Other Foundry Role">Other / General Technical Application</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.3rem', color: 'var(--bc-primary)' }}>Experience Summary & Profile</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--bc-border)', borderRadius: '4px', fontSize: '0.95rem' }}
                    placeholder="Briefly describe your metallurgical / casting foundry experience..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="bc-btn-primary"
                  style={{ justifyContent: 'center', width: '100%', padding: '0.9rem' }}
                >
                  {status.submitting ? 'Submitting Application...' : 'Send Application'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
