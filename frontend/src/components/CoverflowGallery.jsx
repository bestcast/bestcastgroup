import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function CoverflowGallery({ items = [], autoPlayInterval = 4000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = items.length;

  // Auto-play effect
  useEffect(() => {
    if (isHovered || total <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isHovered, total, autoPlayInterval]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div 
      className="bc-coverflow-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Stage */}
      <div className="bc-coverflow-stage">
        {items.map((item, index) => {
          // Calculate cyclic shortest offset relative to activeIndex
          let offset = index - activeIndex;
          const half = Math.floor(total / 2);
          if (offset < -half) offset += total;
          if (offset > half) offset -= total;

          const absOffset = Math.abs(offset);
          const isActive = offset === 0;

          // Determine visibility cutoff (showing max 2 items on left & right)
          if (absOffset > 2) {
            return (
              <div 
                key={index} 
                className="bc-coverflow-card bc-card-hidden"
                style={{
                  transform: `translateX(${offset > 0 ? 300 : -300}%) scale(0.5)`,
                  opacity: 0,
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              />
            );
          }

          // Compute style transforms based on position
          let translateX = offset * 70; // percentage shift
          let scale = 1.15;
          let opacity = 1;
          let zIndex = 10;
          let rotateY = 0;

          if (absOffset === 1) {
            scale = 0.85;
            opacity = 0.75;
            zIndex = 5;
            rotateY = offset > 0 ? -12 : 12;
            translateX = offset > 0 ? 78 : -78;
          } else if (absOffset === 2) {
            scale = 0.68;
            opacity = 0.45;
            zIndex = 2;
            rotateY = offset > 0 ? -22 : 22;
            translateX = offset > 0 ? 138 : -138;
          }

          return (
            <div
              key={index}
              className={`bc-coverflow-card ${isActive ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              style={{
                transform: `translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
                opacity: opacity,
                zIndex: zIndex,
                cursor: isActive ? 'default' : 'pointer',
              }}
            >
              <img 
                src={item.src || item} 
                alt={item.title || `Gallery image ${index + 1}`} 
                className="bc-coverflow-img"
              />
              {item.title && (
                <div className="bc-coverflow-caption">
                  <h4>{item.title}</h4>
                  {item.subtext && <p>{item.subtext}</p>}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrow Buttons */}
      <div className="bc-coverflow-controls">
        <button 
          className="bc-coverflow-btn" 
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <ArrowLeft size={18} />
        </button>
        <button 
          className="bc-coverflow-btn" 
          onClick={handleNext}
          aria-label="Next slide"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
