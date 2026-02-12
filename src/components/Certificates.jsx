import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiAward, FiFilter, FiCpu, FiImage, FiX } from 'react-icons/fi';
import { SiGoogle } from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';
import { certificates } from '../data/portfolioData';

const DeloitteLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="#86BC25" />
    <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="Arial">D</text>
  </svg>
);

const issuerIcons = {
  Google: <SiGoogle size={22} color="#4285F4" />,
  NeuralSeek: <FiCpu size={22} color="#8B5CF6" />,
  'Deloitte Australia, Forage': <DeloitteLogo size={22} />,
  'Microsoft, edX': <FaMicrosoft size={22} color="#00A4EF" />,
};

export default function Certificates() {
  const [filter, setFilter] = useState('All');
  const [previewImage, setPreviewImage] = useState(null);

  const issuers = ['All', ...new Set(certificates.map((c) => c.issuer))];
  const filtered =
    filter === 'All'
      ? certificates
      : certificates.filter((c) => c.issuer === filter);

  const handleCertClick = (e, cert) => {
    if (cert.isImage) {
      e.preventDefault();
      setPreviewImage(cert.link);
    }
  };

  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Certificates</span>
          <h2 className="section-title">
            My <span className="gradient-text">credentials</span>
          </h2>
        </div>

        {/* Filter */}
        <div className="cert-filters">
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
        </div>

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
                onClick={(e) => handleCertClick(e, cert)}
              >
                <div className="cert-card-icon">
                  <span>{cert.isImage ? <FiImage size={22} /> : (issuerIcons[cert.issuer] || <FiAward size={22} />)}</span>
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

        {/* Image Preview Modal */}
        <AnimatePresence>
          {previewImage && (
            <motion.div
              className="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewImage(null)}
            >
              <motion.div
                className="lightbox-content"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="lightbox-close" onClick={() => setPreviewImage(null)}>
                  <FiX size={24} />
                </button>
                <div className="lightbox-image-wrapper">
                  <img src={previewImage} alt="Certificate" className="lightbox-img" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
