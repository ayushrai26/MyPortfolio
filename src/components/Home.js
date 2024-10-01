import React from 'react';
import '../styles/Home.css'; // Import CSS for styling
import ProfileImage from '../images/myy.jpeg'; // Replace with your image
import {  FaTwitter, FaLinkedin, FaGithub,FaEnvelope } from 'react-icons/fa';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div id="home" className="home-container">
      {/* Left Section */}
      <div className="left-section">
        <h1 className="typing-effect" >Hi, I'm Ayush Rai</h1>
        <h2 className="title">Frontend Developer</h2>
        <p>
        Problem-solving Frontend Developer with a knack for building responsive, interactive user interfaces. 
        Let's tackle challenges together and create amazing digital experiences
        </p>
        <div className="buttons">
        <Link to="/contact" className="btn btn-primary">Hire Me</Link>
          <a href="/" className="btn btn-secondary">Let's Talk</a>
        </div>
          
        {/* Social Icons Section */}
        <div className="social-icons">
          <a href="https://github.com/ayushrai26" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://x.com/AyushRai2612" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/ayush-rai-ar2612" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:iush.ar2601@gmail.com">
            <FaEnvelope/>
          </a>
          
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <img src={ProfileImage} alt="Profile" className="profile-image" />
      </div>
    </div>
  );
}

export default Home;
