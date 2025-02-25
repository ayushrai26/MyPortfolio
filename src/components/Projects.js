import React from 'react';
import '../styles/Projects.css';
import Movie from '../images/Movie.png';
import task from '../images/Task.png'
import meme from '../images/meme.png'
import ecom from '../images/ecom.png'
function Projects() {
  return (
    <div className="projects-section">
      {/* Section Heading */}
      <h2 className="section-heading">My Projects</h2>

      {/* Projects Container */}
      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-card">
          <img src={Movie}alt="Movie Search App" className="project-image" />
          <div className="project-content">
            <h3>Project 1: Movie Search App</h3>
            <p>Engineered a responsive movie search application using JavaScript and React, integrating the OMDB API for
            real-time data retrieval.</p>
            <div className="tech-stack">
              <span className="tech">React</span>
              <span className="tech">JavaScript</span>
              <span className="tech">OMDB API</span>
              <span className="tech">HTML,CSS</span>
            </div>
            <div className="project-links">
              <a href="https://ayushrai26.github.io/Movie-Search-appp/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/ayushrai26/Movie-Search-appp" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src={task} alt="Portfolio Website" className="project-image" />
          <div className="project-content">
            <h3>Project 2: Taskify App</h3>
            <p>Engineered a feature-rich task scheduling app, Taskify, using HTML, CSS, and JavaScript, incorporating a sleek UI
            and interactive components to improve task organization and productivity.</p>
            <div className="tech-stack">
              
              <span className="tech">HTML</span>
              <span className="tech">CSS</span>
              <span className="tech">JavaScript</span>
            </div>
            <div className="project-links">
              <a href="https://ayushrai26.github.io/Taskify-Project/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/ayushrai26/Taskify-Project" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        </div>
           {/* Project 3 */}
        <div className="project-card">
          <img src={ecom} alt="Portfolio Website" className="project-image" />
          <div className="project-content">
            <h3>Project 3: E-Commerce Website ShopperStore</h3>
            <p>Developed a full-stack e-commerce website using the MERN (MongoDB, Express.js, React.js, Node.js) stack, featuring user authentication, product management, cart functionality, and a seamless shopping experience.</p>
            <div className="tech-stack">
              
              <span className="tech">HTML</span>
              <span className="tech">CSS</span>
              <span className="tech">JavaScript</span>
              <span className="tech">React</span>
              <span className="tech">Node</span>
              <span className="tech">Express</span>
              <span className="tech">MongoDB</span>
              <span className="tech">JWT</span>
              
            </div>
            <div className="project-links">
              <a href="https://ayushshopperstore.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/ayushrai26/ShopperStore-frontend-" target="_blank" rel="noopener noreferrer">Source Code(Frontend)</a>
              <a href="https://github.com/ayushrai26/ShopperStore-backend-" target="_blank" rel="noopener noreferrer">Source Code(backend)</a>
            </div>
          </div>
        </div>
        {/* Project 4 */}
        <div className="project-card">
          <img src={meme} alt="Blog Platform" className="project-image" />
          <div className="project-content">
            <h3>Project 4: Meme Generator App</h3>
            <p>Designed and developed a dynamic Meme Generator App using React, leveraging state management to facilitate
            real-time text customization and meme rendering..</p>
            <div className="tech-stack">
              <span className="tech">React</span>
              <span className="tech">JavaScript</span>
              <span className="tech">HTML,CSS</span>
            </div>
            <div className="project-links">
              <a href="https://meme-appp-ayush-rais-projects-22ebbee0.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/ayushrai26/MemeAppp" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
