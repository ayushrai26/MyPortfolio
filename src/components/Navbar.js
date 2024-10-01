import React from 'react';
import '../styles/Navbar.css'; // Import the Navbar CSS
import { Link } from 'react-router-dom';
import Logo from '../images/prog.png'
function Navbar() {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo">
      <img src={Logo} alt="Ayush's Logo" className="logo-image" />
        <a href="#home">Ayush.</a>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
      <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </div>
  );
}

export default Navbar;
