import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiHeart, FiArrowUp } from 'react-icons/fi';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
          <span className="footer-logo">{'<AKS />'}</span>
            <p>{personalData.name} — {personalData.title}</p>
          </div>
          <div className="footer-links">
            <motion.a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </motion.a>
            <motion.a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </motion.a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Made with <FiHeart size={14} className="heart-icon" /> by {personalData.name} &copy; {new Date().getFullYear()}
          </p>
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <FiArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
