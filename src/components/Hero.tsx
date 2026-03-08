import React, { useState, useRef, useEffect } from 'react';
import GalaxyBackground from './GalaxyBackground';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setGlowPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <GalaxyBackground />
      
      {/* Glow effect following mouse */}
      <div 
        className="hero-glow"
        style={{
          left: `${glowPos.x}px`,
          top: `${glowPos.y}px`,
        }}
      />

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-word">Unlimited</span>
          <span className="title-word">Movies,</span>
          <span className="title-word">Web Series</span>
          <span className="title-word">&amp; Originals</span>
        </h1>
        
        <p className="hero-subtitle">
          Stream anytime, anywhere in stunning 4K quality.
        </p>

        <a 
          href="https://your-ott-link.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-cta-button"
        >
          <span className="button-text">Watch Now</span>
          <span className="button-glow"></span>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
};

export default Hero;
