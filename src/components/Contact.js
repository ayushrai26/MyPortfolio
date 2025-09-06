
import '../styles/Contact.css';

import Swal from 'sweetalert2'

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
  Swal.fire({
    title:'Contact Form',
    text:'Form submitted successfully',
    icon:'success',
    confirmButtonText:'Okay'
  })

  }
   

  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit" className="btn-primary">Send</button>
      </form>



      
      
    </div>
  );
}

export default Contact;
