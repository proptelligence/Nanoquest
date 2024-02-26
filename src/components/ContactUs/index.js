import React from 'react';
import './index.css'
import Navbar11 from '../Navbar11';

function ContactUs() {
  return (
    <> 
    <Navbar11/> 
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, please feel free to reach out to us:</p>
      <ul>
        <li>Email: <a href="mailto:support@nanoquesttech.in">support@nanoquesttech.in</a></li>
        {/* You can add more contact methods such as phone numbers, addresses, etc. */}
      </ul>
    </div>
    </>
  );
}

export default ContactUs;
