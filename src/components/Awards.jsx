import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward } from 'react-icons/fi';
import { awards } from '../data/portfolioData';

export default function Awards() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section awards-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Honors & Awards</span>
          <h2 className="section-title">
            Recognition & <span className="gradient-text">achievements</span>
          </h2>
        </motion.div>

        <div className="awards-list">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              className="award-item"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
