import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import { awards } from '../data/portfolioData';

export default function Awards() {
  return (
    <section className="section awards-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Honors & Awards</span>
          <h2 className="section-title">
            Recognition & <span className="gradient-text">achievements</span>
          </h2>
        </div>

        <div className="awards-list">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              className="award-item"
              whileHover={{ x: 10, scale: 1.01 }}
            >
              <div className="award-icon">
                <FiAward size={18} />
              </div>
              <p>{award}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
