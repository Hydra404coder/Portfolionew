import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';
import { personalData } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
};

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Animated background elements */}
      <div className="hero-bg-effects">
        <motion.div
          className="gradient-orb orb-1"
          animate={{
            x: [0, 120, -30, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.25, 0.95, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="gradient-orb orb-2"
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 80, -40, 0],
            scale: [1.2, 0.9, 1.15, 1.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="gradient-orb orb-3"
          animate={{
            x: [0, 80, -60, 0],
            y: [0, 100, -50, 0],
            scale: [1, 1.3, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Additional subtle bubbles */}
        <motion.div
          className="gradient-orb orb-4"
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 60, -30, 0],
            scale: [1, 1.2, 0.85, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="gradient-orb orb-5"
          animate={{
            x: [0, 70, -50, 0],
            y: [0, -80, 50, 0],
            scale: [0.9, 1.25, 1.05, 0.9],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="gradient-orb orb-6"
          animate={{
            x: [0, -50, 70, 0],
            y: [0, 50, -60, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating particles (reduced for performance) */}
      <div className="particles">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
            }}
            animate={{
              y: [0, Math.random() * -80 - 30],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={itemVariants}>
          <span className="badge-dot" />
          Available for opportunities
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          Hi, I'm{' '}
          <span className="gradient-text">{personalData.name}</span>
        </motion.h1>

        <motion.div className="hero-typing" variants={itemVariants}>
          <TypeAnimation
            sequence={[
              'Building Intelligent Systems',
              2000,
              'Full Stack Developer',
              2000,
              'AI/ML Engineer',
              2000,
              'Google Student Ambassador',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="typing-text"
          />
        </motion.div>

        <motion.p className="hero-description" variants={itemVariants}>
          Engineering student passionate about AI, Machine Learning, and building
          impactful full-stack applications. Currently exploring the frontiers of
          Generative AI and Agentic systems.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(99,102,241,0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div className="hero-socials" variants={itemVariants}>
          <motion.a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub"
          >
            <FiGithub size={22} />
          </motion.a>
          <motion.a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="LinkedIn"
          >
            <FiLinkedin size={22} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        variants={floatingVariants}
        animate="animate"
      >
        <span>Scroll Down</span>
        <FiArrowDown size={20} />
      </motion.div>
    </section>
  );
}
