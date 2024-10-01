import React from 'react';
import { FaCode, FaProjectDiagram, FaCogs,FaTimes,FaHtml5,FaCss3 ,FaJs,FaReact,FaGit} from 'react-icons/fa';
import '../styles/Skills.css';

const skillsData = [
  {
    title: 'HTML',
    icon: <FaHtml5 />,
  },
  {
    title: 'CSS',
    icon: <FaCss3 />,
  },
  {
    title: 'JavaScript',
    icon: <FaJs />,
  },
  {
    title: 'React',
    icon: <FaReact/>,
  },
  {
    title: 'C/C++',
    icon: <FaCode />,
  },
  {
    title: 'Data Structures',
    icon: <FaProjectDiagram />,
  },
  {
    title: 'Algorithms',
    icon: <FaProjectDiagram />,
  },
  {
    title: 'OOPs',
    icon: <FaTimes/>,
  },
  {
    title: 'Git',
    icon: <FaGit />,
  },
  {
    title: 'VS Code',
    icon: <FaCogs />,
  },
  {
    title: 'REST APIs',
    icon: <FaCogs />,
  },
];

function Skills() {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
