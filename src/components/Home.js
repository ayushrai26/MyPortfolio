import React from 'react';
import '../styles/Home.css'; 
import ProfileImage from '../images/myy.jpeg'; 

import {Link} from 'react-router-dom'

function Home() {
  return (
    <div id="home" className="home-container">
    
      <div className="left-section">
        <h1 className="typing-effect" >Hi, I'm Ayush Rai</h1>
        <h2 className="title">FullStack MERN Developer</h2>
        <p>
        Problem-solving FullStack Developer with a knack for building responsive, interactive user interfaces. 
        Let's tackle challenges together and create amazing digital experiences
        </p>
        <div className="buttons">
        <Link to="/contact" className="btn btn-primary">Hire Me</Link>
          
        </div>
          
      
        
      </div>

    
      <div className="right-section">
        <img src={ProfileImage} alt="Profile" className="profile-image" />
      </div>
    </div>
  );
}

export default Home;
