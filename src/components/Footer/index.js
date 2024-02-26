import React from "react";

import './index.css'

function Footer() {
  return (
    <div className="footer-container">
      

      <div className="footer-content"> 
      

        <div className="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </div> 
        <div className="quick-links">
          <h2>Follow us</h2>
          <ul className="quick-links-2">
          <li>
              <a href='https://www.facebook.com/proptelligence' >
              <img
                src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" // Replace with the actual image URL
                alt="Facebook" className="social-img"
              />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/proptelligence' >
              <img
                src="https://img.freepik.com/premium-vector/instagram-icon-paper-cut-style-social-media-icons_505135-235.jpg" // Replace with the actual image URL
                alt="Instagram" className="social-img"
              />
              </a>
            </li>
            <li>
              <a href='https://x.com/proptelligence' >
              <img
                src="https://img.freepik.com/premium-vector/vector-new-twitter-logo-x-2023-twitter-x-logo-twitter-with-black-circle_982187-137.jpg" // Replace with the actual image URL
                alt="Twitter" className="social-img"
              />
              </a>
            </li> 
            <li>
              <a href='https://www.linkedin.com/company/proptelligence/' >
              <img
                src="https://img.freepik.com/premium-vector/linkedin-app-icon-world-s-largest-professional-network-social-networking-jobs-careers_277909-476.jpg" // Replace with the actual image URL
                alt="LinkedIn" className="social-img"
              />
              </a>
            </li>

            
          </ul>
        </div>
        
      </div>
      
      <div className="copyright">
        © Nanoquest Copyrights. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
