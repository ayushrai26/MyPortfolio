import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css"; 

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  

  
  

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Ayush Rai</a>
      </div>

      <div className={`nav-links ${menuActive ? "active" : ""}`}>
        <a href="/" onClick={() => setMenuActive(false)}>Home</a>
        <a href ="/about" onClick={()=>setMenuActive(false)}>About</a>
        <a href="/skills" onClick={() => setMenuActive(false)}>Skills</a>
        <a href="/projects" onClick={() => setMenuActive(false)}>Projects</a>
        <a href="/contact" onClick={() => setMenuActive(false)}>Contact</a>
       
      </div>

      <div className="menu-icon" onClick={() => setMenuActive(!menuActive)}>
        {menuActive ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
