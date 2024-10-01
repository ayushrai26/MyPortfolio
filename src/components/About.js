import React, { useState } from 'react';
import { FaAward, FaLaptopCode, FaLightbulb } from 'react-icons/fa';
import '../styles/About.css';
import Image from '../images/my.jpeg'; // Make sure this image path is correct

import Modal from 'react-modal';



// Custom styles for the modal
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '600px',
    backgroundColor: '#1c1c1c',
    color: '#fff',
    borderRadius: '10px',
    padding: '20px',
  },
};

// Ensure you set the modal app element for accessibility
Modal.setAppElement('#root');

function About() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleDownload = () => {
    // Increment download count here (this could be an API call)
    console.log('Resume downloaded'); // Replace with actual tracking logic
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    console.log('Feedback:', feedback); // Replace with API call to submit feedback
    // Clear feedback after submission
    setFeedback('');
  };

  return (
    <div className="about-section">
      {/* Main About Container */}
      <div className="about-content">
        {/* Image Section */}
        <div className="about-image">
          <img src={Image} alt="Profile" className="profile-pic" />
        </div>

        {/* Text Section */}
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hello! I am <strong>Ayush Rai</strong>, a passionate Frontend Developer dedicated to crafting engaging and user-friendly web experiences. With a strong foundation in modern web technologies, I specialize in transforming innovative ideas into seamless digital realities.
          </p>
          <h2>My Journey</h2>
          <p>
          My journey into the world of frontend development began with a fascination for technology and design. Growing up, I was always curious about how websites worked and enjoyed creating simple web pages. This passion led me to explore the vast realm of web development, where I discovered the power of transforming ideas into interactive digital experiences.
          </p>
          <h2>My Approach</h2>
          <p>
            I believe that great web design is more than just aesthetics; it is about delivering an exceptional user experience. I approach every project with a user-centered mindset, focusing on functionality, accessibility, and responsiveness. My goal is to ensure that every interaction is intuitive and enjoyable, whether on desktop or mobile.
          </p>
          <h2>What Sets Me Apart</h2>
          <p>
            My diverse experience spans e-commerce and SaaS projects. I thrive in collaborative environments, where I can work closely with designers, product managers, and stakeholders to turn complex challenges into elegant solutions. My keen attention to detail, coupled with a proactive attitude, allows me to deliver high-quality results that exceed expectations.
          </p>
          <h2>Beyond Development</h2>
          <p>
            When I am not coding, you can find me exploring the latest design trends, contributing to open-source projects, or hiking in the great outdoors. I am always looking for opportunities to grow, both personally and professionally, and I am excited to bring my skills to new and exciting challenges.
          </p>
          <h2>Let’s Connect</h2>
          <p>
            I am actively seeking opportunities to collaborate on innovative projects and contribute to a team that values creativity and excellence. If you are looking for a dedicated frontend developer who is passionate about building stunning web applications, I would love to hear from you!
          </p>

          {/* Key Highlights Section */}
          <div className="highlights">
            <div className="highlight">
              <FaLaptopCode className="highlight-icon" />
              <h3>Innovative Solutions</h3>
              <p>Building creative and efficient solutions for complex problems.</p>
            </div>
            <div className="highlight">
              <FaLightbulb className="highlight-icon" />
              <h3>Continuous Learning</h3>
              <p>Always exploring new technologies and improving skillsets.</p>
            </div>
            <div className="highlight">
              <FaAward className="highlight-icon" />
              <h3>Quality Work</h3>
              <p>Delivering high-quality code with best practices.</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="cta-buttons">
            <button onClick={() => setModalIsOpen(true)} className="btn btn-primary">
              Preview Resume
            </button>
            <a href="/Ayush_s_Resume_Frontend_dev.pdf" className="btn btn-secondary" download onClick={handleDownload}>
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Modal for Preview */}
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={modalStyles}>
        <h2>Resume Preview</h2>
        <iframe
          src='/ayu.pdf'// Ensure this path is correct
          title="Resume Preview"
          style={{ width: '100%', height: '400px', border: 'none' }}
        ></iframe>
        <form onSubmit={handleFeedbackSubmit}>
          <h3>Feedback</h3>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Leave your feedback here..."
            rows="4"
            style={{ width: '100%', borderRadius: '5px', padding: '10px', marginTop: '10px' }}
          ></textarea>
          <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>
            Submit Feedback
          </button>
        </form>
        {feedbackSubmitted && <p style={{ color: 'green' }}>Thank you for your feedback!</p>}
        <button onClick={() => setModalIsOpen(false)} className="btn btn-secondary" style={{ marginTop: '10px' }}>
          Close
        </button>
      </Modal>
    </div>
  );
}

export default About;
