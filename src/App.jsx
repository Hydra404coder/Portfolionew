import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Awards from './components/Awards';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FiMail } from 'react-icons/fi';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) return JSON.parse(saved);
    }
    // Default to dark theme
    return true;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    );
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Track scroll for floating CTA visibility
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 400px)
      setShowCta(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Parallax effect for global glossy background
  const { scrollY } = useScroll();
  const glowY1 = useTransform(scrollY, [0, 3000], [0, -400]);
  const glowY2 = useTransform(scrollY, [0, 3000], [0, -250]);
  const glowY3 = useTransform(scrollY, [0, 3000], [0, -550]);
  const glowX1 = useTransform(scrollY, [0, 3000], [0, -100]);
  const glowX2 = useTransform(scrollY, [0, 3000], [0, 150]);

  return (
    <div className="app">
      {/* Global glossy background with parallax + subtle animation */}
      <div className="section-glow">
        <motion.div
          className="section-glow-orb glow-orb-1"
          style={{ y: glowY1, x: glowX1 }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="section-glow-orb glow-orb-2"
          style={{ y: glowY2, x: glowX2 }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.22, 0.32, 0.22],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="section-glow-orb glow-orb-3"
          style={{ y: glowY3 }}
          animate={{
            scale: [1, 1.2, 0.95, 1],
            opacity: [0.2, 0.3, 0.25, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Awards />
        <Certificates />
        <Resume />
        <Contact />
      </main>
      <Footer />

      {/* Floating CTA for mobile - visible after scrolling past hero */}
      <AnimatePresence>
        {showCta && (
          <motion.button
            className="floating-cta"
            onClick={scrollToContact}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            aria-label="Contact me"
            title="Contact me"
          >
            <FiMail size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
