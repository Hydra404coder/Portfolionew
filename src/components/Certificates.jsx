import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiAward, FiFilter } from 'react-icons/fi';
import { certificates } from '../data/portfolioData';

const issuerIcons = {
  Google: '🔵',
  NeuralSeek: '🤖',
  'Deloitte Australia, Forage': '🏢',
  'Microsoft, edX': '🟦',
};

export default function Certificates() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [filter, setFilter] = useState('All');

  const issuers = ['All', ...new Set(certificates.map((c) => c.issuer))];
  const filtered =
    filter === 'All'
      ? certificates
      : certificates.filter((c) => c.issuer === filter);

  return (
    <section id="certificates" className="section certificates" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Certificates</span>
          <h2 className="section-title">
            My <span className="gradient-text">credentials</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          className="cert-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FiFilter size={16} />
          {issuers.map((issuer) => (
            <motion.button
              key={issuer}
              className={`filter-btn ${filter === issuer ? 'active' : ''}`}
              onClick={() => setFilter(issuer)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {issuer}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div className="cert-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, i) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="cert-card-icon">
                  <span>{issuerIcons[cert.issuer] || '📜'}</span>
                </div>
                <div className="cert-card-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
                <div className="cert-link-icon">
                  <FiExternalLink size={16} />
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
