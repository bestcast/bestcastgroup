import React from 'react';
import CoverflowGallery from '../components/CoverflowGallery';

export default function IndustrialAppsPage() {
  const sectors = [
    {
      title: 'DIE CAST COMPONENTS FOR AUTOMOTIVE INDUSTRY',
      desc: 'Die Cast components are widely used for producing high-quality parts for the automotive industry. These include engine components, transmission housings, suspension components, braking components, cylinder heads, cylinder block, pistons, transmission housings, suspension housings, etc. The ability to produce precise, complex, and strong parts makes Die Casting an ideal manufacturing process for the automotive industry.',
      image: '/uploads/2023/03/Automotive-6-blueorange.jpg',
      reverse: false
    },
    {
      title: 'DIE CAST COMPONENTS FOR AEROSPACE INDUSTRY',
      desc: 'Die Cast components are used in various aerospace applications, such as electrical connectors, hydraulic fittings, and fuel system connectors. These parts require high precision, tight tolerances, and excellent corrosion resistance. Die Cast housings are also used in aerospace applications such as instrument, gearbox, and pump housings. These parts require high strength, stiffness, and durability.',
      image: '/uploads/2023/03/Automotive-7-blueorange.jpg',
      reverse: true
    },
    {
      title: 'DIE CAST COMPONENTS FOR DEFENCE INDUSTRY',
      desc: 'Die casting is commonly used in the production of parts for defence vehicles due to its ability to produce high-quality, precise, and complex parts with excellent strength-to-weight ratios.',
      image: '/uploads/2023/03/Engineering-3-blueorange.jpg',
      reverse: false
    },
    {
      title: 'DIE CAST COMPONENTS FOR POWER GENERATION INDUSTRY',
      desc: 'Best Cast manufactures various components for Power Generation applications. These include Generator Components like housings and cooling fins; Turbine components like blades and shrouds; Heat Sinks; and Connectors.',
      image: '/uploads/2023/03/Powergen-14-blueorange.jpg',
      reverse: true
    }
  ];

  const galleryItems = [
    { title: 'Automotive Housing', subtext: 'Precision Cast Component', src: '/uploads/2023/03/Automotive-1-silverwhite-300x300.jpg' },
    { title: 'Transmission Bracket', subtext: 'Alloy Steel Casting', src: '/uploads/2023/03/Automotive-2-silverwhite-300x300.jpg' },
    { title: 'Engine Manifold', subtext: 'High Heat Tolerant', src: '/uploads/2023/03/Automotive-3-silverwhite-300x300.jpg' },
    { title: 'Actuator Housing', subtext: 'CF8M Stainless Steel', src: '/uploads/2023/03/Automotive-4-silverwhite-300x300.jpg' },
    { title: 'Pump Impeller Unit', subtext: 'Precision Machined', src: '/uploads/2023/03/Automotive-5-silverwhite-300x300.jpg' },
    { title: 'Flange Joint', subtext: 'High Pressure Rated', src: '/uploads/2023/03/Automotive-6-silverwhite-480x480.jpg' },
    { title: 'Control Valve Body', subtext: 'Investment Cast', src: '/uploads/2023/03/Automotive-7-silverwhite-480x480.jpg' },
    { title: 'Hydraulic Fitting', subtext: 'Zero Vacuum Defect', src: '/uploads/2023/03/Automotive-8-silverwhite-480x480.jpg' }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <div className="bc-page-hero">
        <div className="bc-container">
          <span style={{ color: 'var(--bc-orange)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.9rem' }}>
            Application Sectors
          </span>
          <h1 className="bc-page-hero-title">
            Industrial Applications
          </h1>
          <p className="bc-page-hero-desc">
            Serving global OEMs with precision investment cast components across demanding engineering domains.
          </p>
        </div>
      </div>

      {sectors.map((s, idx) => (
        <section key={idx} style={{ borderBottom: '1px solid #f0f0f0' }}>
          <div className="bc-split-row">
            {s.reverse ? (
              <>
                <div 
                  className="bc-split-image" 
                  style={{ backgroundImage: `url("${s.image}")` }} 
                  role="img"
                  aria-label={s.title}
                />
                <div className="bc-split-content">
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', color: '#111111', marginBottom: '1.2rem', lineHeight: '1.4' }}>
                    {s.title}
                  </h2>
                  <p style={{ fontSize: '0.92rem', lineHeight: '1.85', color: '#555555' }}>
                    {s.desc}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="bc-split-content">
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', color: '#111111', marginBottom: '1.2rem', lineHeight: '1.4' }}>
                    {s.title}
                  </h2>
                  <p style={{ fontSize: '0.92rem', lineHeight: '1.85', color: '#555555' }}>
                    {s.desc}
                  </p>
                </div>
                <div 
                  className="bc-split-image" 
                  style={{ backgroundImage: `url("${s.image}")` }} 
                  role="img"
                  aria-label={s.title}
                />
              </>
            )}
          </div>
        </section>
      ))}

      {/* PRODUCT GALLERY (Interactive Auto & Manual Coverflow Slider) */}
      <section style={{ padding: '4rem 0 3rem 0', textAlign: 'center', backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <div className="bc-container">
          <h2 className="bc-section-title-clean">PRODUCT GALLERY</h2>
          <CoverflowGallery items={galleryItems} autoPlayInterval={3800} />
        </div>
      </section>
    </div>
  );
}
