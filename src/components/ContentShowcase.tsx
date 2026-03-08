import React, { useState, useRef, useEffect } from 'react';
import '../styles/ContentShowcase.css';

interface Movie {
  id: number;
  title: string;
  image: string;
}

const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Cosmic Adventure",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    id: 2,
    title: "Cinematic Dreams",
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    id: 3,
    title: "Digital Horizon",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  },
  {
    id: 4,
    title: "Neon Nights",
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
  },
  {
    id: 5,
    title: "Virtual Reality",
    image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
  },
  {
    id: 6,
    title: "Future Pulse",
    image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
  },
];

const ContentShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll horizontal carousel
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval: ReturnType<typeof setInterval>;

    const autoScroll = () => {
      scrollContainer.scrollBy({ left: 2, behavior: 'smooth' });
    };

    scrollInterval = setInterval(autoScroll, 30);

    const handleMouseEnter = () => clearInterval(scrollInterval);
    const handleMouseLeave = () => {
      scrollInterval = setInterval(autoScroll, 30);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleCarouselDrag = (direction: 'left' | 'right') => {
    const newIndex = direction === 'left' 
      ? (activeIndex - 1 + mockMovies.length) % mockMovies.length
      : (activeIndex + 1) % mockMovies.length;
    setActiveIndex(newIndex);
  };

  return (
    <section id="content" className="content-showcase">
      <div className="showcase-header">
        <h2 className="showcase-title">Explore Our Content</h2>
        <p className="showcase-subtitle">Discover thousands of premium movies and web series</p>
      </div>

      {/* 3D Carousel - Center Featured */}
      <div className="carousel-section">
        <div className="carousel-container" ref={carouselRef}>
          <div className="carousel-wrapper">
            {mockMovies.map((movie, idx) => {
              const distance = Math.abs(idx - activeIndex);
              const isActive = idx === activeIndex;
              const position = idx - activeIndex;

              return (
                <div
                  key={movie.id}
                  className={`carousel-item ${isActive ? 'active' : ''}`}
                  style={{
                    transform: `
                      translateX(${position * 280}px) 
                      scale(${isActive ? 1 : 0.7})
                      rotateY(${position > 0 ? 30 : position < 0 ? -30 : 0}deg)
                    `,
                    opacity: distance > 2 ? 0 : 1,
                    zIndex: isActive ? 10 : 5 - distance,
                  }}
                >
                  <div className="poster" style={{ background: movie.image }}>
                    <div className="poster-overlay">
                      <div className="movie-title">{movie.title}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button 
          className="carousel-button prev"
          onClick={() => handleCarouselDrag('left')}
        >
          ←
        </button>
        <button 
          className="carousel-button next"
          onClick={() => handleCarouselDrag('right')}
        >
          →
        </button>
      </div>

      {/* Horizontal Auto-Scrolling Row */}
      <div className="horizontal-row-section">
        <h3 className="row-title">Trending Now</h3>
        <div className="horizontal-scroll-container" ref={scrollContainerRef}>
          <div className="horizontal-row">
            {[...mockMovies, ...mockMovies].map((movie, idx) => (
              <div key={`${movie.id}-${idx}`} className="horizontal-item">
                <div 
                  className="horizontal-poster"
                  style={{ background: movie.image }}
                >
                  <div className="glow-border"></div>
                  <div className="item-overlay">
                    <div className="play-icon">▶</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Parallax dots */}
      <div className="parallax-dots">
        {mockMovies.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default ContentShowcase;
