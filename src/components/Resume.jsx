import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiFileText, FiDownload, FiExternalLink } from 'react-icons/fi';

export default function Resume() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="resume" className="section resume-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Resume</span>
          <h2 className="section-title">
            My <span className="gradient-text">resume</span>
          </h2>
        </motion.div>

        <motion.div
          className="resume-card"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="resume-icon">
            <FiFileText size={64} />
          </div>
          <h3 className="resume-title">Akhil Shibu</h3>
          <p className="resume-subtitle">AI/ML Developer &amp; Tech Enthusiast</p>
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
        </motion.div>
      </div>
    </section>
  );
}
