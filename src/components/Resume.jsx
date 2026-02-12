import { motion } from 'framer-motion';
import { FiFileText, FiDownload, FiExternalLink } from 'react-icons/fi';

export default function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Resume</span>
          <h2 className="section-title">
            My <span className="gradient-text">resume</span>
          </h2>
        </div>

        <div className="resume-grid">
          <div className="resume-card">
            <div className="resume-icon">
              <FiFileText size={64} />
            </div>
            <h3 className="resume-title">Akhil Shibu</h3>
            <p className="resume-subtitle">AI/ML Engineer &amp; Full Stack Developer</p>
            <div className="resume-buttons">
              <motion.a
                href="/resume/Akhil_Resume.pdf"
                download
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload size={18} />
                Download Resume
              </motion.a>
              <motion.a
                href="/resume/Akhil_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink size={18} />
                Open in New Tab
              </motion.a>
            </div>
          </div>

          <div className="resume-preview">
            <img
              src="/photos/resume.jpg"
              alt="Resume preview"
              className="resume-preview-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
