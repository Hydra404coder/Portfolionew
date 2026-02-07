import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiChevronRight } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

const techColors = {
  Python: '#3776AB',
  Flask: '#000000',
  React: '#61DAFB',
  FastAPI: '#009688',
  'Vertex AI': '#4285F4',
  OpenCV: '#5C3EE8',
  YOLOv5: '#FF6F00',
  TensorFlow: '#FF6F00',
  PyQt6: '#41CD52',
  C: '#A8B9CC',
  Arduino: '#00979D',
  HTML: '#E34F26',
  CSS: '#1572B6',
  PHP: '#777BB4',
  JS: '#F7DF1E',
  JavaScript: '#F7DF1E',
  MySQL: '#4479A1',
  Git: '#F05032',
  MediaPipe: '#0097A7',
  Pandas: '#150458',
  QGIS: '#589632',
  nrf24l01: '#555',
  RFID: '#555',
  HX711: '#555',
  'React.js': '#61DAFB',
  'Node.js': '#339933',
  MongoDB: '#47A248',
  RAG: '#8B5CF6',
  'Gemini AI': '#4285F4',
  LangChain: '#1C3C3C',
  ChromaDB: '#FF6B6B',
};

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Projects</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">built</span>
          </h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onHoverStart={() => setHoveredProject(i)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{ y: -8 }}
            >
              <div className="project-card-top">
                <div className="project-card-header">
                  <div className="project-folder">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                    </svg>
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        aria-label="View source code"
                      >
                        <FiGithub size={20} />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        aria-label="View live demo"
                      >
                        <FiExternalLink size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>

              <div className="project-card-bottom">
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="tech-tag"
                      style={{
                        borderColor: techColors[t] || '#6366f1',
                        color: techColors[t] || '#6366f1',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <AnimatePresence>
                {hoveredProject === i && (
                  <motion.div
                    className="project-hover-glow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/Hydra404coder"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More on GitHub <FiChevronRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
