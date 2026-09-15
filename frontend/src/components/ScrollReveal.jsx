import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  animation = 'fade-up', // 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'flip-up'
  delay = 0,
  duration = 700,
  threshold = 0.15,
  once = true,
  className = '',
  style = {}
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const customStyle = {
    ...style,
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`
  };

  return (
    <div
      ref={ref}
      className={`bc-scroll-reveal bc-sr-${animation} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={customStyle}
    >
      {children}
    </div>
  );
}
