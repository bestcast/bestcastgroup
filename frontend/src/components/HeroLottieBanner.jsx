import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

export default function HeroLottieBanner() {
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    if (animRef.current) {
      animRef.current.destroy();
    }

    const isMobile = window.innerWidth <= 768;
    const animationPath = isMobile
      ? '/assets/Hero-mobile-10-Sep-2023.json'
      : '/assets/Hero-dktp-10-Sep-2023.json';

    try {
      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
          clearCanvas: true,
        }
      });

      animRef.current.addEventListener('DOMLoaded', () => {
        setLoading(false);
      });
    } catch (err) {
      console.error('Failed to load lottie animation:', err);
    }

    return () => {
      if (animRef.current) {
        animRef.current.destroy();
      }
    };
  }, []);

  return (
    <section className="bc-lottie-hero-section">
      <div className="bc-lottie-hero-inner">
        {loading && (
          <div className="bc-lottie-skeleton">
            <div className="bc-spinner" />
          </div>
        )}
        <div 
          ref={containerRef} 
          className="bc-lottie-container"
          style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.3s ease' }}
        />
      </div>
    </section>
  );
}
