import React, { useState, useRef, useEffect } from 'react';
import '../styles/ContentShowcase.css';

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
    imageUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300&h=450&fit=crop"
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

const ContentShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll horizontal carousel with infinite loop
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval: ReturnType<typeof setInterval>;
    let isScrolling = true;

    const autoScroll = () => {
      if (!isScrolling) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const maxScroll = scrollWidth - clientWidth;
      
      // If we've reached the end, smoothly reset to beginning
      if (scrollLeft >= maxScroll - 5) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 2;
      }
    };

    scrollInterval = setInterval(autoScroll, 30);

    const handleMouseEnter = () => {
      isScrolling = false;
      clearInterval(scrollInterval);
    };
    
    const handleMouseLeave = () => {
      isScrolling = true;
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
                    {movie.imageUrl && (
                      <img 
                        src={movie.imageUrl} 
                        alt={movie.title}
                        className="poster-image"
                      />
                    )}
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
                  {movie.imageUrl && (
                    <img 
                      src={movie.imageUrl} 
                      alt={movie.title}
                      className="poster-image"
                    />
                  )}
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
