import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
} from 'react-icons/fi';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mailto fallback
    const mailtoLink = `mailto:${personalData.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setStatus('sent');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Contact</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">connect</span>
          </h2>
        </motion.div>

        <div className="contact-grid">
          {/* Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Get in touch</h3>
            <p>
              I'm always open to new opportunities, collaborations, and
              interesting projects. Drop me a message!
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <FiMail size={20} />
                <div>
                  <span className="detail-label">Email</span>
                  <a href={`mailto:${personalData.email}`}>
                    {personalData.email}
                  </a>
                </div>
              </div>
              <div className="contact-detail">
                <FiMapPin size={20} />
                <div>
                  <span className="detail-label">Location</span>
                  <span>{personalData.location}</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <motion.a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub size={20} />
                <span>GitHub</span>
                <FiArrowUpRight size={14} />
              </motion.a>
              <motion.a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin size={20} />
                <span>LinkedIn</span>
                <FiArrowUpRight size={14} />
              </motion.a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project, opportunity, or just say hi!"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="btn btn-primary submit-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiSend size={16} />
              {status === 'sent' ? 'Opening Mail Client...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
