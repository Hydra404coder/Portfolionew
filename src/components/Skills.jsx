import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Marquee from 'react-fast-marquee';
import { skills } from '../data/portfolioData';
import {
  SiPython, SiJavascript, SiReact, SiFlask, SiOpencv,
  SiPytorch, SiTensorflow, SiMongodb, SiGit, SiHtml5,
  SiCss3, SiPhp, SiTableau, SiCplusplus, SiMysql,
  SiFastapi, SiGooglecolab, SiJupyter,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

const iconMap = {
  'C++': <SiCplusplus />,
  Java: <FaJava />,
  Python: <SiPython />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  JavaScript: <SiJavascript />,
  PHP: <SiPhp />,
  React: <SiReact />,
  Flask: <SiFlask />,
  FastAPI: <SiFastapi />,
  PyTorch: <SiPytorch />,
  OpenCV: <SiOpencv />,
  TensorFlow: <SiTensorflow />,
  Git: <SiGit />,
  'VS Code': <VscCode />,
  'Jupyter Notebook': <SiJupyter />,
  'Google Colab': <SiGooglecolab />,
  'Power BI': <SiTableau />,
  Tableau: <SiTableau />,
  SQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  ChromaDB: <SiMongodb />,
  LangChain: <SiPython />,
  RAG: <SiPython />,
  'Machine Learning': <SiPython />,
  'Deep Learning': <SiPytorch />,
  'Generative AI': <SiPython />,
};

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">tech stack</span>
          </h2>
        </motion.div>

        {/* Marquee ticker */}
        <motion.div
          className="skills-marquee"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Marquee speed={40} gradient={false} pauseOnHover>
            {Object.values(skills)
              .flat()
              .map((skill, i) => (
                <div key={i} className="marquee-item">
                  <span className="marquee-icon">{iconMap[skill] || '💻'}</span>
                  <span>{skill}</span>
                </div>
              ))}
          </Marquee>
        </motion.div>

        {/* Category grid */}
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
            >
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-items">
                {items.map((skill) => (
                  <motion.div
                    key={skill}
                    className="skill-item"
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="skill-icon">{iconMap[skill] || '💻'}</span>
                    <span className="skill-name">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
