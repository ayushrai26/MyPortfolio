import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css"; 

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <a href="/">Ayush Rai</a>
      </div>

      <div className={`nav-links ${menuActive ? "active" : ""}`}>
        <a href="/" onClick={() => setMenuActive(false)}>Home</a>
        <a href="/skills" onClick={() => setMenuActive(false)}>Skills</a>
        <a href="/projects" onClick={() => setMenuActive(false)}>Projects</a>
        <a href="/contact" onClick={() => setMenuActive(false)}>Contact</a>
        <a href="/contact" className="btn-nav" onClick={() => setMenuActive(false)}>Hire Me</a>
      </div>

      <div className="menu-icon" onClick={() => setMenuActive(!menuActive)}>
        {menuActive ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
