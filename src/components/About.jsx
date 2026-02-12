import { motion } from 'framer-motion';
import { FiMapPin, FiBookOpen, FiCode, FiAward } from 'react-icons/fi';
import { SiGoogle } from 'react-icons/si';
import { personalData } from '../data/portfolioData';

const stats = [
  { icon: <FiCode />, value: '8+', label: 'Projects' },
  { icon: <FiAward />, value: '12', label: 'Certificates' },
  { icon: <FiBookOpen />, value: '8.75', label: 'CGPA' },
  { icon: <FiMapPin />, value: 'BLR', label: 'Bangalore' },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Get to know <span className="gradient-text">me better</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <div className="about-image-container">
              <img
                src="/photos/imgs/download (1).png"
                alt="Akhil Shibu - AI/ML Engineer"
                className="about-image"
              />
              <div className="about-image-accent" />
            </div>
          </div>

          <div className="about-right">
            <div className="about-text">
              <p>{personalData.about}</p>
              <div className="about-highlights">
                <div className="highlight">
                  <span className="highlight-icon">🎓</span>
                  <span>B.E. in AI & Machine Learning</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon"><SiGoogle size={18} color="#4285F4" /></span>
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
            </div>

            <div className="about-stats">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="stat-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
