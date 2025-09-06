import React from 'react'
import '../styles/Footer.css'
import {  FaTwitter, FaLinkedin, FaGithub,FaEnvelope } from 'react-icons/fa';
function Footer() {
  return (
    <div className="social-icons">
         <div className='iconsDiv'>
              <a href="https://github.com/ayushrai26" target="_blank" rel="noopener noreferrer" title='github'>
                <FaGithub />
                
                
              </a>
              <label className='label'>GitHub</label>
              </div>
              <div className='iconsDiv'>
              <a href="https://x.com/AyushRai2612" target="_blank" rel="noopener noreferrer" title='twitter'>
                <FaTwitter />
              </a>
              <label className='label'>Twitter</label>
              </div>
              <div className='iconsDiv'>
              <a href="https://www.linkedin.com/in/ayush-rai-ar2612" target="_blank" rel="noopener noreferrer" title='linkedin'>
                <FaLinkedin />
              </a>
              <label className='label'>LinkedIn</label>
              </div>
              <div className='iconsDiv'>
              <a href="mailto:iush.ar2601@gmail.com" title='Email'>
                <FaEnvelope/>
              </a>
              <label className='label'>Email</label>
              </div>


              
            </div>
  )
}

export default Footer