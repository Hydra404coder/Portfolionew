import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar, FiChevronDown, FiImage, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { experience } from '../data/portfolioData';

function Lightbox({ photos, currentIndex, companyName, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="lightbox-content"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="lightbox-close" onClick={onClose}>
          <FiX size={24} />
        </button>

        <button className="lightbox-nav lightbox-prev" onClick={onPrev}>
          <FiChevronLeft size={28} />
        </button>

        <div className="lightbox-image-wrapper">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={photos[currentIndex]}
              alt={`${companyName} photo ${currentIndex + 1}`}
              className="lightbox-img"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
        </div>

        <button className="lightbox-nav lightbox-next" onClick={onNext}>
          <FiChevronRight size={28} />
        </button>

        <div className="lightbox-counter">
          {currentIndex + 1} / {photos.length}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [lightbox, setLightbox] = useState({ open: false, photos: [], index: 0, company: '' });
  const [hoverPreview, setHoverPreview] = useState({ visible: false, src: '', x: 0, y: 0 });

  const openLightbox = (photos, index, company) => {
    setLightbox({ open: true, photos, index, company });
  };

  const closeLightbox = useCallback(() => {
    setLightbox((prev) => ({ ...prev, open: false }));
  }, []);

  const prevPhoto = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.photos.length) % prev.photos.length,
    }));
  }, []);

  const nextPhoto = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.photos.length,
    }));
  }, []);

  const handleMouseEnter = (e, src) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPreview({
      visible: true,
      src,
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHoverPreview({ visible: false, src: '', x: 0, y: 0 });
  };

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Experience</span>
          <h2 className="section-title">
            Where I've <span className="gradient-text">worked</span>
          </h2>
        </div>

        <div className="timeline">
          <div className="timeline-line" />
          {experience.map((exp, i) => (
            <div
              key={i}
              className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot" />
              <motion.div
                className="timeline-card"
                whileHover={{ y: -5, boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
              >
                <div className="timeline-card-header">
                  <h3 className="exp-role">{exp.role}</h3>
                  <h4 className="exp-company">
                    <FiBriefcase size={14} />
                    {exp.company}
                  </h4>
                  <div className="exp-meta">
                    <span>
                      <FiMapPin size={12} /> {exp.location}
                    </span>
                    <span>
                      <FiCalendar size={12} /> {exp.period}
                    </span>
                  </div>
                </div>
                <p className="exp-desc">{exp.description}</p>
                
                {exp.photos && exp.photos.length > 0 && (
                  <motion.button
                    className="photos-toggle"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === i ? null : i)
                    }
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiImage size={14} />
                    <span>
                      {expandedIndex === i ? 'Hide Photos' : 'View Photos'}
                    </span>
                    <motion.span
                      animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiChevronDown size={14} />
                    </motion.span>
                  </motion.button>
                )}

                <AnimatePresence>
                  {expandedIndex === i && exp.photos && exp.photos.length > 0 && (
                    <motion.div
                      className="photos-gallery"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="gallery-grid">
                        {exp.photos.map((photo, idx) => (
                          <motion.div
                            key={idx}
                            className="gallery-item"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            onClick={() => openLightbox(exp.photos, idx, exp.company)}
                            onMouseEnter={(e) => handleMouseEnter(e, photo)}
                            onMouseLeave={handleMouseLeave}
                          >
                            <img
                              src={photo}
                              alt={`${exp.company} photo ${idx + 1}`}
                              loading="lazy"
                            />
                            <div className="gallery-item-overlay">
                              <span>Click to expand</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover preview tooltip */}
      <AnimatePresence>
        {hoverPreview.visible && (
          <motion.div
            className="hover-preview"
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 10 }}
            transition={{ duration: 0.2 }}
            style={{
              left: hoverPreview.x,
              top: hoverPreview.y,
            }}
          >
            <img src={hoverPreview.src} alt="Preview" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox modal */}
      <AnimatePresence>
        {lightbox.open && (
          <Lightbox
            photos={lightbox.photos}
            currentIndex={lightbox.index}
            companyName={lightbox.company}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
