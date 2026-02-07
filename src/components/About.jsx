import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiBookOpen, FiCode, FiAward } from 'react-icons/fi';
import { personalData } from '../data/portfolioData';

const stats = [
  { icon: <FiCode />, value: '8+', label: 'Projects' },
  { icon: <FiAward />, value: '11', label: 'Certificates' },
  { icon: <FiBookOpen />, value: '8.75', label: 'CGPA' },
  { icon: <FiMapPin />, value: 'BLR', label: 'Bangalore' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Get to know <span className="gradient-text">me better</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>{personalData.about}</p>
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-icon">🎓</span>
                <span>B.E. in AI & Machine Learning</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🤖</span>
                <span>Google Student AI Ambassador</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🏆</span>
                <span>SIH National Level Selection</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">💡</span>
                <span>Bangalore Tech Summit 2025 Presenter</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
