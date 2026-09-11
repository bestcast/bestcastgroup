import React from 'react';

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
      desc: 'Die casting is commonly used in the production of parts for defence vehicles due to its ability to produce high-quality, precise, and complex parts with excellent strength-to-weight ratios. Transmission components such as housings, covers, and valves; suspension components such as control arms, steering knuckles, and shock absorber housings; and many braking and engine components are manufactured using Gravity Die Casting due to their strength, durability, heat dissipation and dimensional accuracy parameters. High-performance Die Cast components can withstand harsh environments, extreme temperatures and heavy loads, all crucial requirements in Defence Vehicles.',
      image: '/uploads/2023/03/Engineering-3-blueorange.jpg',
      reverse: false
    },
    {
      title: 'DIE CAST COMPONENTS FOR POWER GENERATION INDUSTRY',
      desc: 'Best Cast manufactures various components for Power Generation applications. These include Generator Components like housings and cooling fins; Turbine components like blades and shrouds; Heat Sinks; and Connectors. Due to the high strengths, durability, precision, and tight tolerances afforded by Die Cast components, they find various applications within the Power Generation Industry.',
      image: '/uploads/2023/03/Powergen-14-blueorange.jpg',
      reverse: true
    },
    {
      title: 'DIE CAST COMPONENTS FOR RAILWAY INDUSTRY',
      desc: 'Die Casting is commonly used in the production of parts for the railway sector. Many brake system components such as brake housings; suspension components like shock absorber housings; and many electrical and lighting components are produced using the Die Casting process.',
      image: '/uploads/2023/03/Automotive-2-blueorange.jpg',
      reverse: false
    },
    {
      title: 'DIE CAST COMPONENTS FOR MARINE INDUSTRY',
      desc: 'Die Casting is commonly used in the production of parts for Marine sectors. The quality of Aluminium in marine is the key to its ability to resist corrosion, as its nature is to oxidize quickly, it reacts with oxygen to form aluminum oxide. This aluminum oxide layer is chemically bound to the surface, and it seals the core aluminum from any further reaction and prevent corrosion. Due to its corrosion resistance, aluminum alloy is widely used for marine application.',
      image: '/uploads/2023/03/Powergen-3-blueorange.jpg',
      reverse: true
    },
    {
      title: 'DIE CAST COMPONENTS FOR GENERAL ENGINEERING INDUSTRY',
      desc: 'Die casting is commonly used in the manufacture of valve components due to their need to withstand high pressures, temperatures, and corrosive environments. Die casting can also produce parts with high strength, stiffness, and dimensional accuracy making it a suitable manufacturing process for valve components. Another common application for die cast products are pump components such as impellers, casings, and housings. These parts require high precision, tight tolerances, and resistance to corrosion and wear.',
      image: '/uploads/2023/03/Engineering-2-blueorange.jpg',
      reverse: false
    }
  ];

  const galleryItems = [
    '/uploads/2023/03/Automotive-1-silverwhite-300x300.jpg',
    '/uploads/2023/03/Automotive-2-silverwhite-300x300.jpg',
    '/uploads/2023/03/Automotive-3-silverwhite-300x300.jpg',
    '/uploads/2023/03/Automotive-4-silverwhite-300x300.jpg',
    '/uploads/2023/03/Automotive-5-silverwhite-300x300.jpg',
    '/uploads/2023/03/Automotive-6-silverwhite-480x480.jpg',
    '/uploads/2023/03/Automotive-7-silverwhite-480x480.jpg',
    '/uploads/2023/03/Automotive-8-silverwhite-480x480.jpg'
  ];

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Alternating Industry Split Rows matching screenshot */}
      {sectors.map((s, idx) => (
        <section key={idx} style={{ borderBottom: '1px solid #f0f0f0' }}>
          <div className="bc-split-row">
            {/* If reverse: Image first, else Text first on desktop; responsive on mobile */}
            {s.reverse ? (
              <>
                <div 
                  className="bc-split-image" 
                  style={{ backgroundImage: `url("${s.image}")` }} 
                  role="img"
                  aria-label={s.title}
                />
                <div className="bc-split-content">
                  <h2 style={{
                    fontSize: '1.4rem',
                    fontWeight: 900,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#111111',
                    marginBottom: '1.2rem',
                    lineHeight: '1.4'
                  }}>
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
                  <h2 style={{
                    fontSize: '1.4rem',
                    fontWeight: 900,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#111111',
                    marginBottom: '1.2rem',
                    lineHeight: '1.4'
                  }}>
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

      {/* PRODUCT GALLERY (Responsive 4-column to 2-column grid) */}
      <section style={{ padding: '5rem 0', textAlign: 'center', backgroundColor: '#ffffff' }}>
        <div className="bc-container">
          <h2 className="bc-section-title-clean">PRODUCT GALLERY</h2>

          <div className="bc-gallery-4">
            {galleryItems.map((img, i) => (
              <div key={i} style={{
                backgroundColor: '#f3f4f6',
                borderRadius: '8px',
                overflow: 'hidden',
                aspectRatio: '1/1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
              }}>
                <img src={img} alt={`Product Component ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
