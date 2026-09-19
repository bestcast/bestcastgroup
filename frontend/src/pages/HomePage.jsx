import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Diamond, CheckSquare, Layers, Box, Sparkles, FileText, Send, ChevronDown } from 'lucide-react';
import HeroLottieBanner from '../components/HeroLottieBanner';
import ScrollProgress from '../components/ScrollProgress';
import ScrollToTop from '../components/ScrollToTop';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import CoverflowGallery from '../components/CoverflowGallery';

export default function HomePage() {
  const navigate = useNavigate();

  const values = [
    {
      title: 'INTEGRITY',
      desc: 'We endeavour to do the right thing, even if it’s the hardest. When in doubt, we seek professional advice.'
    },
    {
      title: 'DELIVERING CUSTOMER VALUE',
      desc: 'Our customers are the reason we exist. Our goal is to provide the best design and manufacturing solution that our company can provide in order to add value to their business.'
    },
    {
      title: 'FAIRNESS',
      desc: 'We aim to treat all stakeholders involved with the same high standards.'
    },
    {
      title: 'THE TEAM',
      desc: 'We endeavour to do the right thing, even if it’s the hardest. We believe we are more effective when we work together. As we integrate our businesses, we strive to offer our customers the best while maintaining the entrepreneurial brilliance of new ideas.'
    },
    {
      title: 'CONTINUOUS IMPROVEMENT',
      desc: 'We work on a culture of continuous improvement that helps us reduce delays, decrease turnaround time, eliminate waste, abate scrap, enhance product quality, amend employee engagement, promote a proactive learning culture, recreate a safer workplace and encourage innovation.'
    },
    {
      title: 'GOOD GOVERNANCE',
      desc: 'We believe in it – for ourselves, our customers and our regulators.'
    },
    {
      title: 'TRANSPARENCY',
      desc: 'We wish to be clear and open about our business, our performance and who we are. In accordance with the rules of fair conduct and propriety information we maintain customer confidentiality.'
    }
  ];

  const capabilities = [
    {
      title: 'DESIGN ENGINEERING & MANUFACTURING SOLUTIONS',
      desc: 'Best Cast provides comprehensive Design Engineering and Manufacturing Solutions, delivering superior products using efficient design, prototyping, and manufacturing methods globally.',
      icon: '/uploads/2023/06/DEMS-icon-1.png'
    },
    {
      title: 'NEW PRODUCT DEVELOPMENT',
      desc: 'Best Cast New Product Development processes combine IATF standards, AIAG Key Elements, and APQP for superior quality, complete project transparency, and effective customer communication.',
      icon: '/uploads/2023/06/NPD-icon-1.png'
    },
    {
      title: 'TOOL ROOM',
      desc: 'Best Cast perfects die casting via rigorous tool design and advanced analytics, prioritizing product quality, operational efficiency, and cost-effectiveness.',
      icon: '/uploads/2023/06/Tool-Room-icon-1.png'
    },
    {
      title: 'ALLOY MAKING',
      desc: 'Best Cast\'s alloying facility produces high-quality, customizable alloys, offering precise specifications, cost-effectiveness, and reduced carbon footprint for environmentally conscious production.',
      icon: '/uploads/2023/06/Alloy-icon-1.png'
    },
    {
      title: 'SHELL CORE MAKING',
      desc: 'Best Cast specialises in Shell Core Making, producing complex cores for a wide range of applications across various industries.',
      icon: '/uploads/2023/06/SCM-icon-1.png'
    },
    {
      title: 'GRAVITY DIE CASTING',
      desc: 'Best Cast Foundry leverages 50+ years of Gravity Die Casting expertise to produce high-precision, durable, and cost-effective aluminium castings.',
      icon: '/uploads/2023/06/GDC-icon-1.png'
    },
    {
      title: 'HEAT TREATMENT',
      desc: 'Best Cast leverages advanced machinery and strict quality control for precise heat treatment of aluminium castings, enhancing their mechanical properties.',
      icon: '/uploads/2023/06/HT-icon-1.png'
    },
    {
      title: 'PRECISION CNC MACHINING',
      desc: 'Best Cast provides comprehensive CNC machining services, from rapid prototyping to high-volume production, using advanced machinery and strict quality control measures.',
      icon: '/uploads/2023/06/CNC-icon-1.png'
    },
    {
      title: 'SECONDARY FINISHING PROCESSES',
      desc: 'Best Cast excels in precision finishing processes, including trimming, deburring, sanding, polishing, shot blasting, impregnation, and diverse coating techniques for enhanced casting quality.',
      icon: '/uploads/2023/06/SFP-icon-1.png'
    },
    {
      title: 'INSPECTION & ASSESSMENT',
      desc: 'Best Cast utilises Non-Destructive Testing (NDT) methods including visual, dimensional, chemical, mechanical, and advanced tests to ensure superior product quality.',
      icon: '/uploads/2023/06/IA-icon-1.png'
    }
  ];

  const productImages = [
    '/uploads/2023/03/Automotive-1-silverwhite-300x300.jpg',
    '/uploads/2023/03/Automotive-2-silverwhite-300x300.jpg',
    '/uploads/2023/03/Automotive-3-silverwhite-300x300.jpg',
    '/uploads/2023/03/Automotive-4-silverwhite-300x300.jpg',
    '/uploads/2023/03/Automotive-5-silverwhite-300x300.jpg'
  ];

  const productGalleryItems = [
    {
      title: 'Automotive Housing Casting',
      subtext: 'High Precision Die Cast Component',
      src: '/uploads/2023/03/Automotive-1-silverwhite.jpg'
    },
    {
      title: 'Structural Mounting Bracket',
      subtext: 'Lightweight Aluminum Alloy',
      src: '/uploads/2023/03/Automotive-2-silverwhite.jpg'
    },
    {
      title: 'Precision Hydraulic Valve Body',
      subtext: 'Complex Internal Flow Passage',
      src: '/uploads/2023/03/Automotive-3-silverwhite.jpg'
    },
    {
      title: 'Cylinder Head Cover Assembly',
      subtext: 'Pressure Tight & Heat Treated',
      src: '/uploads/2023/03/Automotive-4-silverwhite.jpg'
    },
    {
      title: 'Rotor & Stator Housing',
      subtext: 'CNC Machined to Sub-Micron Tolerance',
      src: '/uploads/2023/03/Automotive-5-silverwhite.jpg'
    },
    {
      title: 'Power Transmission Housing',
      subtext: 'High Strength Gravity Die Casting',
      src: '/uploads/2023/03/Automotive-6-silverwhite.jpg'
    },
    {
      title: 'Pump & Filter Body',
      subtext: 'Corrosion-Resistant Finish',
      src: '/uploads/2023/03/Automotive-7-silverwhite.jpg'
    }
  ];

  const infrastructureGalleryItems = [
    {
      title: 'Robotic Autopour System',
      subtext: 'Automated Molten Metal Dispensing',
      src: '/uploads/2023/03/Autopour-Robot2.jpg'
    },
    {
      title: 'Gravity Die Casting Cell',
      subtext: '50+ Years Operations Expertise',
      src: '/uploads/2023/03/Gravity-Die-Casting-1.jpg'
    },
    {
      title: 'Multi-Axis Precision CNC Line',
      subtext: 'High Volume Rapid Machining',
      src: '/uploads/2023/03/CNC-Machining-2.jpg'
    },
    {
      title: 'Aluminum Melting Furnace',
      subtext: 'Regulated Temperature Alloy Room',
      src: '/uploads/2023/03/DieCast-Foundry-2.jpg'
    },
    {
      title: 'Quality Control Inspection',
      subtext: 'CMM & Spectrometer Verification',
      src: '/uploads/2023/03/Inspection-1.jpg'
    },
    {
      title: 'Secondary Finishing & Grinding',
      subtext: 'Precision Trimming & Shot Blasting',
      src: '/uploads/2023/03/FinishingGrinding.jpg'
    },
    {
      title: 'Automated Helium Leak Testing',
      subtext: '100% Leak Proof Quality Assurance',
      src: '/uploads/2023/03/Helium-Leak-Testing.jpg'
    }
  ];

  const scrollToFirstSection = () => {
    const target = document.querySelector('.bc-simple-enquiry-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.75, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating Smooth Scroll to Top Button */}
      <ScrollToTop />

      {/* 1. Hero Section with Origin Lottie Animation and Net Lattice Background */}
      <div style={{ position: 'relative' }}>
        <HeroLottieBanner />
        <div 
          className="bc-hero-scroll-hint" 
          onClick={scrollToFirstSection}
          style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
        >
          {/* <span>Scroll Down</span> */}
          {/* <ChevronDown size={20} /> */}
        </div>
      </div>

      {/* 1.5. Compact & Simple Customer & Supplier Enquiry Banner (Reference Image Style) */}
      <section className="bc-simple-enquiry-section">
        <div className="bc-container">
          <div className="bc-simple-enquiry-banner">
            {/* Left Content */}
            <ScrollReveal animation="fade-right" duration={800} className="bc-simple-enquiry-left">
              <div className="bc-simple-enquiry-pill">
                <FileText size={15} />
                <span>Customer & Supplier Enquiry</span>
              </div>
              <h2 className="bc-simple-enquiry-title">
                Tell us what kind of casting or supply solution you need.
              </h2>
              <p className="bc-simple-enquiry-subtext">
                Share your requirements, component specifications, or vendor profile. Your enquiry will connect directly with our engineering and supply chain experts.
              </p>
            </ScrollReveal>

            {/* Right White Card Form */}
            <ScrollReveal animation="fade-left" duration={800} delay={150} className="bc-simple-enquiry-card">
              <form onSubmit={(e) => { e.preventDefault(); navigate('/enquiries'); }}>
                <div className="bc-simple-enquiry-grid">
                  <div className="bc-simple-field-group">
                    <label className="bc-simple-field-label">Your Name</label>
                    <input
                      type="text"
                      className="bc-simple-field-input"
                      placeholder="e.g. Alex Smith"
                    />
                  </div>
                  <div className="bc-simple-field-group">
                    <label className="bc-simple-field-label">I am a</label>
                    <select className="bc-simple-field-select" defaultValue="Customer / Buyer">
                      <option value="Customer / Buyer">Customer / Buyer</option>
                      <option value="Supplier / Vendor">Supplier / Vendor</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  <div className="bc-simple-field-group">
                    <label className="bc-simple-field-label">Business Email</label>
                    <input
                      type="email"
                      className="bc-simple-field-input"
                      placeholder="e.g. alex@company.com"
                    />
                  </div>
                  <div className="bc-simple-field-group">
                    <label className="bc-simple-field-label">Company Name</label>
                    <input
                      type="text"
                      className="bc-simple-field-input"
                      placeholder="e.g. Global Tech Inc."
                    />
                  </div>
                </div>

                <Link to="/enquiries" className="bc-simple-enquiry-btn">
                  <Send size={16} />
                  <span>Send Enquiry & Go to Contact Us</span>
                </Link>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Dark Furnace Section: "Its Best Cast with Us" */}
      <section className="bc-furnace-section">
        <div className="bc-container">
          <ScrollReveal animation="fade-up" duration={700}>
            <h2 className="bc-furnace-heading">
              Its <em>Best Cast</em> with Us
            </h2>
          </ScrollReveal>

          <div className="bc-two-column-block">
            <ScrollReveal animation="fade-right" delay={100} duration={800}>
              <div>
                <h3 className="bc-column-title">PRINCIPLE</h3>
                <p className="bc-column-desc">
                  The guiding principle that motivates every individual at Best Cast. The company is based on trust, commitment, consistency, high standards of business ethics, and integrity. And this encourages us to accelerate our development.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200} duration={800}>
              <div>
                <h3 className="bc-column-title">SUCCESS</h3>
                <p className="bc-column-desc">
                  Customers are the testimony of our success. And our diligent workforce is the reason for our prosperity. Each of us has an intrinsic drive to achieve, and we take this spirit of excellence beyond the confines of the workplace.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Versatile, Flexible & Agile */}
      <section className="bc-versatile-banner">
        <div className="bc-container">
          <ScrollReveal animation="zoom-in" duration={850}>
            <h2 className="bc-versatile-title">VERSATILE, FLEXIBLE & AGILE</h2>
            <p className="bc-versatile-desc">
              Our components range from simple to complex, raw to fully machined, and from 0.25 kg to over 50 kg in Die Castings. Our annual production volume for each component may vary from 200 to over 900,000 units.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Stats Counter Bar */}
      <section className="bc-stats-bar">
        <div className="bc-container">
          <ScrollReveal animation="fade-up" duration={800}>
            <div className="bc-stats-grid">
              <div>
                <div className="bc-stat-number">
                  <AnimatedCounter end={2000} suffix="+" duration={2200} />
                </div>
                <div className="bc-stat-label">PRODUCTS DESIGNED</div>
              </div>

              <div className="bc-stat-badge">
                <div style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  border: '3px solid #d4af37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  fontWeight: 900,
                  color: '#d4af37',
                  marginBottom: '0.4rem'
                }}>
                  <AnimatedCounter end={50} suffix="+" duration={2000} />
                </div>
                <div className="bc-stat-label" style={{ color: '#ffffff' }}>Years of Manufacturing Excellence</div>
              </div>

              <div>
                <div className="bc-stat-number">
                  <AnimatedCounter end={50} suffix="+" duration={2000} />
                </div>
                <div className="bc-stat-label">CUSTOMERS</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. OUR MISSION */}
      <section className="bc-mission-section">
        <div className="bc-container">
          <ScrollReveal animation="zoom-in" duration={800}>
            <h2 className="bc-section-title-clean">OUR MISSION</h2>
            <p className="bc-mission-text">
              We will adapt to progressive methods in order to enhance our journey to become the most effective and efficient manufacturer of high-quality precision castings while adhering to the global needs of manufacturing in a sustainable manner.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. OUR VALUES (with Large Finished Casting on Right Screen Edge) */}
      <section className="bc-values-section">
        <div className="bc-container">
          <ScrollReveal animation="fade-up">
            <h2 className="bc-section-title-clean" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>OUR VALUES</h2>
          </ScrollReveal>
        </div>

        <div className="bc-values-wrapper">
          <div className="bc-values-left-col">
            {values.map((v, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 70} duration={600}>
                <div className="bc-value-item">
                  <div className="bc-value-header">
                    <Diamond size={16} color="#000000" fill="#000000" />
                    <span>{v.title}</span>
                  </div>
                  <p className="bc-value-desc">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="bc-values-right-col">
            <ScrollReveal animation="fade-left" delay={250} duration={850}>
              <img 
                src="/uploads/2023/06/home-product-1kpx.jpg" 
                alt="Precision Finished Aluminum Die Casting - Best Cast Group" 
                className="bc-values-right-img"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. OPERATIONAL EXCELLENCE */}
      <section className="bc-operational-banner">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="bc-operational-bg-video"
        >
          <source src="https://www.apple.com/105/media/us/mac-studio/2026/e5b92529-6fd3-439c-9461-9d111718310f/anim/specs-ultra/large.mp4" type="video/mp4" />
        </video>
        <div className="bc-operational-overlay"></div>
        <div className="bc-container" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal animation="fade-up" duration={800}>
            <h2 className="bc-operational-title">OPERATIONAL EXCELLENCE</h2>
            <div className="bc-operational-box">
              Best Cast is focused on fostering a culture of continuous improvement as we strive to be the best at what we do. Our advanced simulation software is utilised to enhance mould designs and regulate the casting process. We build even the most diverse and complex Components at scale, speed, and value using our production processes and systems. Our manufacturing techniques and systems have enabled us to combine knowledge with expertise, agility with precision, and passion with intuition to manufacture even the most versatile and complex Components at scale, speed, and value. Integrating quality control systems and real-time monitoring and inspection reduces defects and scrap. Best Cast's commitment to sustainability is a crucial element of our operational excellence endeavour which includes responsible sourcing of raw materials, implementing energy efficient manufacturing systems, eliminating wastes, and promoting recycling initiatives. By abiding to our core values, we assure components of superior quality, reduce costs, and secure a competitive advantage in our industry.
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Feature Highlights: Fully Finished Components & Single Source */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff' }}>
        <div className="bc-container">
          <div className="bc-two-column-block" style={{ gap: '4rem' }}>
            <ScrollReveal animation="fade-right" duration={750}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <Layers size={36} color="#555555" style={{ flexShrink: 0, marginTop: '5px' }} />
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                    FULLY FINISHED COMPONENTS
                  </h3>
                  <p style={{ color: '#666666', fontSize: '0.9rem', lineHeight: '1.7' }}>
                    With Best Cast's expertise and in-house capabilities across a wide spectrum of Die Casting and finishing processes, we offer fully finished products that are ready for your production line.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={150} duration={750}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <Box size={36} color="#555555" style={{ flexShrink: 0, marginTop: '5px' }} />
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                    SINGLE SOURCE FOR CASTINGS
                  </h3>
                  <p style={{ color: '#666666', fontSize: '0.9rem', lineHeight: '1.7' }}>
                    Cut down on supply chain complexity, reduce cost, exert effective quality control, and speed up your time-to-market with our end-to-end solutions for gravity die cast products.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 9. QUALITY & CERTIFICATION */}
      <section style={{ padding: '2rem 0 5rem 0', textAlign: 'center', backgroundColor: '#ffffff' }}>
        <div className="bc-container">
          <ScrollReveal animation="fade-up" duration={750}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
              <Sparkles size={22} color="#555555" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                QUALITY & CERTIFICATION
              </h3>
            </div>
            <p style={{ maxWidth: '850px', margin: '0 auto 2.5rem auto', color: '#666666', fontSize: '0.9rem', lineHeight: '1.7' }}>
              At Best Cast, we guarantee that our components are produced in strict adherence to all regulatory production standards and compliance requirements. Rest assured that our components are developed in a suitable environment to ensure compliance, regardless of the project. Our company is ISO 9001:2015 (Quality Management Systems) and IATF 16949:2016 (automotive) certified.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="zoom-in" delay={200} duration={800}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <img 
                src="/uploads/2023/06/Certificates-980x342.png" 
                alt="ISO 9001:2015 and IATF 16949:2016 Certificates" 
                style={{ maxWidth: '780px', width: '100%', height: 'auto' }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 10. OUR CAPABILITIES (Grid) */}
      <section style={{ padding: '5rem 0', backgroundColor: '#fafafa', borderTop: '1px solid #eeeeee' }}>
        <div className="bc-container">
          <ScrollReveal animation="fade-up">
            <h2 className="bc-section-title-clean" style={{ textAlign: 'center' }}>OUR CAPABILITIES</h2>
          </ScrollReveal>

          <div className="bc-cap-grid">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={(i % 3) * 100} duration={650}>
                <div className="bc-cap-item">
                  <img 
                    src={cap.icon} 
                    alt={cap.title} 
                    className="bc-cap-icon-img"
                    onError={(e) => { e.currentTarget.style.opacity = '0.3'; }}
                  />
                  <h3 className="bc-cap-title">{cap.title}</h3>
                  <p className="bc-cap-desc">{cap.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PRODUCT GALLERY (3D Coverflow Slider) */}
      <section style={{ padding: '5rem 0 3rem 0', textAlign: 'center', backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <div className="bc-container">
          <ScrollReveal animation="fade-up">
            <h2 className="bc-section-title-clean">PRODUCT GALLERY</h2>
          </ScrollReveal>

          <ScrollReveal animation="zoom-in" delay={150} duration={800}>
            <CoverflowGallery items={productGalleryItems} autoPlayInterval={1900} />
          </ScrollReveal>
        </div>
      </section>

      {/* 12. INFRASTRUCTURE GALLERY (3D Coverflow Slider) */}
      <section style={{ padding: '3rem 0 5rem 0', textAlign: 'center', backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <div className="bc-container">
          <ScrollReveal animation="fade-up">
            <h2 className="bc-section-title-clean">INFRASTRUCTURE GALLERY</h2>
          </ScrollReveal>

          <ScrollReveal animation="zoom-in" delay={150} duration={800}>
            <CoverflowGallery items={infrastructureGalleryItems} autoPlayInterval={2000} />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
