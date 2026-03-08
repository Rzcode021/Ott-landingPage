import React, { useRef, useEffect, useState } from 'react';
import '../styles/DownloadSection.css';

const DownloadSection: React.FC = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (phoneRef.current) {
        const rect = phoneRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        setMousePos({
          x: x / rect.width * 10,
          y: y / rect.height * 10,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="download" className="download-section">
      <div className="download-content">
        <div className="download-text">
          <h2 className="download-title">Watch Anytime. Anywhere.</h2>
          <p className="download-subtitle">
            Download our app and enjoy seamless streaming on all your devices.
          </p>

          <div className="button-group">
            <a 
              href="https://play.google.com/store/apps/details?id=yourapp"
              target="_blank"
              rel="noopener noreferrer"
              className="download-button google-play"
            >
              <span className="button-icon">▶</span>
              Get it on Google Play
            </a>
            <a 
              href="https://your-ott-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="download-button website"
            >
              <span className="button-icon">🌐</span>
              Visit Official Website
            </a>
          </div>
        </div>

        {/* 3D Phone Mockup */}
        <div className="phone-container" ref={phoneRef}>
          <div 
            className="phone-mockup"
            style={{
              transform: `
                perspective(1200px)
                rotateX(${mousePos.y * 0.5}deg)
                rotateY(${mousePos.x * 0.5}deg)
                rotateZ(${mousePos.x * 0.1}deg)
              `,
            }}
          >
            {/* Outer frame */}
            <div className="phone-frame">
              {/* Screen */}
              <div className="phone-screen">
                {/* Notch */}
                <div className="phone-notch"></div>

                {/* Screen content - OTT UI preview */}
                <div className="screen-content">
                  <div className="screen-header">
                    <div className="time">9:41</div>
                  </div>

                  <div className="screen-featured">
                    <div className="featured-poster"></div>
                  </div>

                  <div className="screen-content-row">
                    <div className="small-poster"></div>
                    <div className="small-poster"></div>
                    <div className="small-poster"></div>
                  </div>

                  <div className="screen-content-row">
                    <div className="small-poster"></div>
                    <div className="small-poster"></div>
                    <div className="small-poster"></div>
                  </div>
                </div>
              </div>

              {/* Phone frame details */}
              <div className="frame-top"></div>
              <div className="frame-bottom"></div>
            </div>

            {/* Glow effect */}
            <div className="phone-glow"></div>
          </div>

          {/* Shadow and depth */}
          <div className="phone-shadow"></div>
        </div>
      </div>

      {/* Floating particles background */}
      <div className="download-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>
    </section>
  );
};

export default DownloadSection;
