import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';
import { education } from '../data/portfolioData';

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section education-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Education</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">background</span>
          </h2>
        </motion.div>

        <div className="education-cards">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="edu-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="edu-icon">
                <FiBookOpen size={24} />
              </div>
              <div className="edu-content">
                <h3 className="edu-institution">{edu.institution}</h3>
                <p className="edu-degree">{edu.degree}</p>
                <div className="edu-meta">
                  <span>
                    <FiCalendar size={13} /> {edu.period}
                  </span>
                  <span>
                    <FiMapPin size={13} /> {edu.location}
                  </span>
                </div>
                <div className="edu-score">{edu.score}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
