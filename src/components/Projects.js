import React from "react";
import projectsData from "../utils/projects.json"; 
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects-section">
      <h2 className="section-heading">My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.links.source} target="_blank" rel="noopener noreferrer">Source Code</a>
                {project.links.backend && (
                  <a href={project.links.backend} target="_blank" rel="noopener noreferrer">
                    Source Code (Backend)
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
