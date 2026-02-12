import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Education</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">background</span>
          </h2>
        </div>

        <div className="education-cards">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="edu-card"
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
