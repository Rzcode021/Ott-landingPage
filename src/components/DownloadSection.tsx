import React, { useRef, useEffect, useState } from 'react';
import '../styles/DownloadSection.css';

interface Movie {
  id: number;
  title: string;
  image: string;
  imageUrl?: string;
}

const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Cosmic Adventure",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    imageUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop"
  },
  {
    id: 2,
    title: "Cinematic Dreams",
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    imageUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300&h=450&fit=crop"
  },
  {
    id: 3,
    title: "Digital Horizon",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=300&h=450&fit=crop"
  },
  {
    id: 4,
    title: "Neon Nights",
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    imageUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop"
  },
  {
    id: 5,
    title: "Virtual Reality",
    image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=300&h=450&fit=crop"
  },
  {
    id: 6,
    title: "Future Pulse",
    image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    imageUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop"
  },
];

const DownloadSection: React.FC = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

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

  // Auto-rotate featured image
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % mockMovies.length);
    }, 4000);

    return () => clearInterval(imageInterval);
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
                    <div className="featured-poster" style={{
                      backgroundImage: `url('${mockMovies[currentImageIdx].imageUrl}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}>
                      <div className="featured-overlay"></div>
                    </div>
                  </div>

                  <div className="screen-content-row">
                    {mockMovies.slice(0, 3).map((movie) => (
                      <div key={movie.id} className="small-poster" style={{
                        backgroundImage: `url('${movie.imageUrl}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}>
                        <div className="poster-overlay-small"></div>
                      </div>
                    ))}
                  </div>

                  <div className="screen-content-row">
                    {mockMovies.slice(3, 6).map((movie) => (
                      <div key={movie.id} className="small-poster" style={{
                        backgroundImage: `url('${movie.imageUrl}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}>
                        <div className="poster-overlay-small"></div>
                      </div>
                    ))}
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
