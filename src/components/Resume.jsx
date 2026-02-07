import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiFileText, FiDownload, FiMaximize2 } from 'react-icons/fi';

export default function Resume() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isFullScreen, setIsFullScreen] = useState(false);

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
          className="resume-container"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="resume-actions">
            <motion.a
              href="/resume/Akhil_Resume.pdf"
              download
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload size={16} />
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
              <FiMaximize2 size={16} />
              Open Full Screen
            </motion.a>
          </div>

          <div className="resume-viewer">
            <object
              data="/resume/Akhil_Resume.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              className="resume-pdf"
            >
              <div className="resume-fallback">
                <FiFileText size={48} />
                <h3>Resume Preview</h3>
                <p>Your browser doesn't support inline PDF viewing.</p>
                <a
                  href="/resume/Akhil_Resume.pdf"
                  download
                  className="btn btn-primary"
                >
                  <FiDownload size={16} />
                  Download Resume
                </a>
              </div>
            </object>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
