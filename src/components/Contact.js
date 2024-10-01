import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaTwitter, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com'; // Import EmailJS

function Contact() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false); // State for error message

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service details
    const serviceID = 'service_kyf2n6l'; // Replace with your service ID
    const templateID = 'template_sxfyv8h'; // Replace with your template ID
    const userID = ''; // Replace with your user ID

    // Send email using EmailJS
    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        console.log(result.text);
        setSuccessMessage(true); // Show success message
        e.target.reset(); // Reset the form
        setErrorMessage(false); // Reset error message
      }, (error) => {
        console.log(error.text);
        setErrorMessage(true); // Show error message
        setSuccessMessage(false); // Reset success message
      });

    // Hide the success message after 5 seconds
    setTimeout(() => {
      setSuccessMessage(false);
      setErrorMessage(false); // Hide error message too
    }, 5000);
  };

  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit" className="btn-primary">Send</button>
      </form>

      {/* Success Message */}
      {successMessage && (
        <div className="success-message active">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="error-message active">
          Oops! Something went wrong. Please try again later.
        </div>
      )}

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub size={30} />
        </a>
        <a href="https://x.com/AyushRai2612" target="_blank" rel="noopener noreferrer" title="Twitter">
          <FaTwitter size={30} />
        </a>
        <a href="mailto:iush.ar2601@gmail.com" title="Mail">
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
