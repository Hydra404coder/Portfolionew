import { motion } from 'framer-motion';
import { FiFileText, FiExternalLink, FiCpu } from 'react-icons/fi';
import { SiGoogle } from 'react-icons/si';
import { documents } from '../data/portfolioData';

const issuerIcons = {
  Google: <SiGoogle size={22} color="#4285F4" />,
  NeuralSeek: <FiCpu size={22} color="#8B5CF6" />,
};

export default function Documents() {
  return (
    <section className="section documents-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Documents</span>
          <h2 className="section-title">
            Official <span className="gradient-text">agreements & contracts</span>
          </h2>
        </div>

        <div className="documents-grid">
          {documents.map((doc, i) => (
            <motion.a
              key={i}
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="document-card"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="document-card-icon">
                {issuerIcons[doc.issuer] || <FiFileText size={28} />}
              </div>
              <div className="document-card-content">
                <h3 className="document-title">{doc.title}</h3>
                <p className="document-desc">{doc.description}</p>
              </div>
              <div className="document-link">
                <FiExternalLink size={16} />
                <span>View PDF</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
