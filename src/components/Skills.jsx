import { motion } from 'framer-motion';
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
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">tech stack</span>
          </h2>
        </div>

        {/* Skills intro with illustration */}
        <div className="skills-intro">
          <div className="skills-intro-text">
            <p>
              I work across the full stack with a strong focus on AI/ML technologies.
              From building intelligent backends to crafting responsive frontends,
              here's what I bring to the table.
            </p>
          </div>
          <div className="skills-intro-image">
            <img
              src="/photos/imgs/download (2).png"
              alt="Skills & Technologies"
              className="skills-illus"
            />
          </div>
        </div>

        {/* Marquee ticker */}
        <div className="skills-marquee">
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
        </div>

        {/* Category grid */}
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], i) => (
            <div
              key={category}
              className="skill-category"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
