import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentShowcase from './components/ContentShowcase';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import './styles/globals.css';
import './App.css';

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize smooth scroll with Lenis
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          wheelMultiplier: 1,
          touchMultiplier: 2,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
          lenis.destroy();
        };
      } catch (err) {
        console.warn('Lenis smooth scroll library not available');
      }
    };

    initLenis();

    // Smooth parallax scroll effect - optimized for both directions
    const handleScroll = () => {
      if (!appRef.current) return;

      const sections = appRef.current.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, 1 - (rect.top / window.innerHeight)));
        
        // Smooth overlapping effect with easing
        const easeProgress = scrollProgress < 0.5 
          ? 2 * scrollProgress * scrollProgress 
          : -1 + (4 - 2 * scrollProgress) * scrollProgress;
        
        const offset = easeProgress * 30;
        const scale = 0.98 + easeProgress * 0.02;
        
        section.style.transform = `translateY(${offset}px) scale(${scale})`;
        
        // Smooth z-index update
        const zIndex = Math.floor(scrollProgress * 20);
        section.style.position = 'relative';
        section.style.zIndex = String(zIndex);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app" ref={appRef}>
      <Navbar />
      <Hero />
      <ContentShowcase />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;
