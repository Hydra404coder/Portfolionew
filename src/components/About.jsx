import { motion } from 'framer-motion';
import { FiCpu, FiLayers, FiEye, FiHardDrive } from 'react-icons/fi';
import { SiGoogle } from 'react-icons/si';
import { personalData } from '../data/portfolioData';

const domains = [
  { icon: <FiCpu />, title: 'AI & RAG', items: 'AIKSP, YTRAG, NeuralSeek Agent' },
  { icon: <FiLayers />, title: 'Full Stack', items: 'React, FastAPI, Flask, Node.js' },
  { icon: <FiEye />, title: 'Computer Vision', items: 'YOLOv5, OpenCV, MediaPipe' },
  { icon: <FiHardDrive />, title: 'IoT & Embedded', items: 'Arduino, RFID, LoRaWAN' },
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
            </div>
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

          <div className="about-right">
            <div className="about-text">
              <p>{personalData.about}</p>
            </div>

            <div className="about-stats">
              {domains.map((d, i) => (
                <motion.div
                  key={i}
                  className="stat-card"
                  whileHover={{ scale: 1.04, y: -3 }}
                >
                  <div className="stat-icon">{d.icon}</div>
                  <div className="stat-value">{d.title}</div>
                  <div className="stat-label">{d.items}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
