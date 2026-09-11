import React from 'react';

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* 1. WELCOME TO BEST CAST */}
      <section style={{ padding: '6rem 0 3.5rem 0', textAlign: 'center' }}>
        <div className="bc-container">
          <h1 style={{
            fontSize: 'clamp(1.75rem, 4.5vw, 2.5rem)',
            fontWeight: 900,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#111111',
            marginBottom: '1.5rem'
          }}>
            WELCOME TO BEST CAST
          </h1>
          <p style={{
            maxWidth: '960px',
            margin: '0 auto',
            fontSize: '0.98rem',
            lineHeight: '1.9',
            color: '#555555'
          }}>
            Best Cast is the preferred manufacturing partner for the automotive, aerospace, defence, general engineering, railway, marine, and power generation industries in India and around the world. With over 50 years of expertise, Best Cast's core capabilities include process simulation, tool and die development, die casting, machining, surface treatment, and assembly. We are committed to delivering high-quality and reliable casting solutions to customers across various industries.
          </p>
        </div>
      </section>

      {/* 2. OUR LEGACY */}
      <section style={{ padding: '3.5rem 0 6rem 0', textAlign: 'center', borderBottom: '1px solid #f0f0f0' }}>
        <div className="bc-container">
          <h2 style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            fontWeight: 900,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#111111',
            marginBottom: '1.5rem'
          }}>
            OUR LEGACY
          </h2>
          <div style={{
            maxWidth: '920px',
            margin: '0 auto',
            fontSize: '0.95rem',
            lineHeight: '1.9',
            color: '#555555',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <p>
              Best Cast was founded in the year 1974 in Chennai, India by the visionary entrepreneur Mr. S. R. Kabirdass. Best Cast has always been a leading manufacturer and has lived up to its mission ever since. Our organisation has made significant investments in state-of-the-art machinery and cutting-edge technology since then we have been able to keep up with demand and maintain high standards of quality in our manufacturing. From the 1970s, Best Cast has been actively expanding into international markets and developing partnerships with clients in the United States, Europe, and Asia.
            </p>
            <p>
              Over the years, we have implemented ecologically sensitive practises in an effort to lessen our impact on the environment. Sustainability and environmental friendliness have always been our top priorities. We have established energy-saving manufacturing practices, waste-reduction strategies, and recycling programmes to lessen the impact of our operations on the environment. Efficiency and effectiveness have been the heart of the organisation's philosophy. This involves ensuring a safe and sustainable workplace while also optimising production, cutting down on waste, improving product quality, and delivering outstanding service to customers.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Leadership 1: FOUNDER (Text Left, Photo Right) */}
      <section style={{ padding: '0', borderBottom: '1px solid #eee' }}>
        <div className="bc-split-row">
          <div className="bc-split-content">
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 900,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#111111',
              marginBottom: '2rem'
            }}>
              FOUNDER
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.85', color: '#444444', marginBottom: '1.2rem' }}>
              <strong>S. R. Kabirdass</strong> is a highly skilled and experienced individual in the aluminium foundry industry. He is the founder of Best Cast and has achieved several milestones throughout his career. One of his most notable achievements was developing the <em>first aluminium car wheels</em> for the Indian and Asian markets.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.85', color: '#444444' }}>
              S. R. Kabirdass is known for his hardworking nature and dedication to his craft. The individual possesses extensive expertise in the foundry industry and is highly knowledgeable in their area of specialisation. He has made enormous contributions to the aluminium foundry industry. His accomplishments have paved the way for further advancements in the field and have helped to improve the quality and efficiency of the components produced.
            </p>
          </div>

          <div 
            className="bc-split-image" 
            style={{ backgroundImage: 'url("/uploads/2023/06/Founder.jpg")' }} 
            role="img" 
            aria-label="Founder S. R. Kabirdass"
          />
        </div>
      </section>

      {/* 4. Leadership 2: MANAGING DIRECTOR (Photo Left, Text Right on desktop; responsive on mobile) */}
      <section style={{ padding: '0', borderBottom: '1px solid #eee' }}>
        <div className="bc-split-row">
          <div 
            className="bc-split-image" 
            style={{ backgroundImage: 'url("/uploads/2023/06/Director.jpg")' }} 
            role="img" 
            aria-label="Managing Director Murali Kabirdass"
          />

          <div className="bc-split-content">
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 900,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#111111',
              marginBottom: '2rem'
            }}>
              MANAGING DIRECTOR
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.85', color: '#444444' }}>
              <strong>Murali Kabirdass</strong>, our esteemed Managing Director, has been leading Best Cast, a family-held business, to great success for 36 years. He has successfully spearheaded the company's global expansion by acquiring a multitude of customers across the world. His forward-thinking concepts, including tilt pouring, have been instrumental in propelling the company to new heights. Murali Kabirdass has successfully implemented forward and backward integration strategies, among other initiatives, to drive the company's growth. Under his guidance, Best Cast has achieved remarkable success and he remains committed to driving the company towards new frontiers. His legacy will undoubtedly serve as an inspiration to future generations of entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Leadership 3: DIRECTOR (Text Left, Photo Right) */}
      <section style={{ padding: '0' }}>
        <div className="bc-split-row">
          <div className="bc-split-content">
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 900,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#111111',
              marginBottom: '2rem'
            }}>
              DIRECTOR
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.85', color: '#444444' }}>
              <strong>Mr. Shreyas M. Kabirdass</strong>, son of Mr. Murali Kabirdass with an astounding experience in manufacturing, finance, operations, and general management has joined Best Cast as a full time Director – Business Management from 1st Jan 2020. Well known to all as a forward thinker, he is a Third-Generation entrepreneur who is passionate about strategic business development which helped them to influence many organisations alike. Having an unparalleled track record for achieving some of the most challenging transformation initiatives in the industry he ensures manufacturing performance and quality goals are met with the optimal vision of increasing efficiency and profitability.
            </p>
          </div>

          <div 
            className="bc-split-image" 
            style={{ backgroundImage: 'url("/uploads/2023/07/Director-Image.jpg")' }} 
            role="img" 
            aria-label="Director Mr. Shreyas M. Kabirdass"
          />
        </div>
      </section>
    </div>
  );
}
