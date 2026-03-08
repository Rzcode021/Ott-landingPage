import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentShowcase from './components/ContentShowcase';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import './styles/globals.css';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize smooth scroll with Lenis
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ContentShowcase />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;
