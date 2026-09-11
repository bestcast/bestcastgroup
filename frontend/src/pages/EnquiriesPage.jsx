import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function EnquiriesPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    businessEmail: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    enquiryReason: '',
    message: ''
  });

  const [status, setStatus] = useState({ submitting: false, success: false, error: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: '' });

    try {
      const res = await fetch('http://localhost:5000/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.businessEmail,
          company: formData.companyName,
          subject: formData.enquiryReason || 'General Enquiry',
          message: `Location: ${formData.city}, ${formData.state}, ${formData.country} (Pin: ${formData.pincode})\n\nMessage: ${formData.message}`
        })
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ submitting: false, success: true, error: '' });
        setFormData({
          firstName: '',
          lastName: '',
          companyName: '',
          businessEmail: '',
          city: '',
          state: '',
          country: '',
          pincode: '',
          enquiryReason: '',
          message: ''
        });
      } else {
        setStatus({ submitting: false, success: false, error: data.message || 'Submission error.' });
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: 'Network connection error.' });
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '5rem 0' }}>
      <div className="bc-container">
        {/* Title & Introductory Text matching bestcastgroup.com-enquiries.png */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{
            fontSize: 'clamp(1.6rem, 4.5vw, 2.5rem)',
            fontWeight: 900,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#111111',
            marginBottom: '1.2rem'
          }}>
            EXPLORE OUR ENDLESS POSSIBILITIES
          </h1>
          <p style={{
            maxWidth: '960px',
            margin: '0 auto',
            fontSize: '0.92rem',
            lineHeight: '1.85',
            color: '#555555'
          }}>
            Best Cast, the global manufacturer, offers unparalleled supply chain efficiency, quality, and value enhancements. Our team of experts is fully equipped to assist you with the aluminium die casting process. Our company is dedicated to delivering exceptional service and upholding the superior standard of our components. Please fill out the form on this page with a concise introduction about yourself or send us an email to communicate with one of our industry experts, explore our manufacturing capabilities, or receive a quote. Our company is committed to collaborating closely with our valued customers to provide the highest quality solutions on the market.
          </p>

          <div style={{ width: '45px', height: '3px', backgroundColor: 'var(--bc-orange-btn)', margin: '2.5rem auto 0 auto' }} />
        </div>

        {/* 2-Column Form & Illustration Section */}
        <div className="bc-enquiry-layout">
          {/* Left: Form */}
          <div>
            {status.success && (
              <div style={{ backgroundColor: '#e6f4ea', color: '#137333', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={18} />
                <span>Thank you! Your enquiry has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="bc-form-row">
                <input
                  type="text"
                  required
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                  className="bc-form-input"
                />
                <input
                  type="text"
                  required
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                  className="bc-form-input"
                />
              </div>

              <div className="bc-form-row">
                <input
                  type="text"
                  required
                  placeholder="Company Name *"
                  value={formData.companyName}
                  onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                  className="bc-form-input"
                />
                <input
                  type="email"
                  required
                  placeholder="Business Email *"
                  value={formData.businessEmail}
                  onChange={e => setFormData({ ...formData, businessEmail: e.target.value })}
                  className="bc-form-input"
                />
              </div>

              <div className="bc-form-row">
                <input
                  type="text"
                  required
                  placeholder="City *"
                  value={formData.city}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                  className="bc-form-input"
                />
                <input
                  type="text"
                  required
                  placeholder="State / Province *"
                  value={formData.state}
                  onChange={e => setFormData({ ...formData, state: e.target.value })}
                  className="bc-form-input"
                />
              </div>

              <div className="bc-form-row">
                <select
                  required
                  value={formData.country}
                  onChange={e => setFormData({ ...formData, country: e.target.value })}
                  className="bc-form-select"
                  style={{ color: formData.country ? '#111' : '#777' }}
                >
                  <option value="">Country (Select) *</option>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Italy">Italy</option>
                  <option value="Japan">Japan</option>
                  <option value="Other">Other</option>
                </select>

                <input
                  type="text"
                  required
                  placeholder="Pincode / Zipcode *"
                  value={formData.pincode}
                  onChange={e => setFormData({ ...formData, pincode: e.target.value })}
                  className="bc-form-input"
                />
              </div>

              <div>
                <select
                  value={formData.enquiryReason}
                  onChange={e => setFormData({ ...formData, enquiryReason: e.target.value })}
                  className="bc-form-select"
                  style={{ color: formData.enquiryReason ? '#111' : '#777' }}
                >
                  <option value="">Enquiry Reason (Select) *</option>
                  <option value="New Component RFQ / Quote">New Component RFQ / Quote</option>
                  <option value="Technical Feasibility">Technical Feasibility</option>
                  <option value="Die Casting Consultation">Die Casting Consultation</option>
                  <option value="Vendor Registration">Vendor Registration</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="bc-form-textarea"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="bc-form-submit-btn"
                >
                  {status.submitting ? 'SUBMITTING...' : 'SUBMIT'}
                </button>
              </div>

              <div style={{ clear: 'both', fontSize: '0.75rem', color: '#777777', lineHeight: '1.5', marginTop: '1rem' }}>
                <p style={{ marginBottom: '0.5rem' }}>
                  Best Cast is committed to protecting your information. Your information will be used in accordance with the applicable data privacy law, our internal policies and our privacy policy. As Best Cast is a global organisation, your information may be stored and processed by Best Cast and its affiliates in countries outside your country of residence, but wherever your information is processed, we will handle it with the same care and respect for your privacy.
                </p>
                <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
              </div>
            </form>
          </div>

          {/* Right: Customer Service Agent Illustration matching screenshot */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src="/uploads/2023/06/enquiry-image.jpg" 
              alt="Customer Service Representative" 
              style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Two "OPEN IN GOOGLE MAPS" Orange Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '5rem',
          flexWrap: 'wrap',
          margin: '3rem 0 2rem 0'
        }}>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'var(--bc-orange-btn)',
              color: '#ffffff',
              padding: '0.8rem 2.2rem',
              fontWeight: 800,
              fontSize: '0.82rem',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}
          >
            OPEN IN GOOGLE MAPS
          </a>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'var(--bc-orange-btn)',
              color: '#ffffff',
              padding: '0.8rem 2.2rem',
              fontWeight: 800,
              fontSize: '0.82rem',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}
          >
            OPEN IN GOOGLE MAPS
          </a>
        </div>
      </div>
    </div>
  );
}
