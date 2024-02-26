import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img className='logo' src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1706082314/MicrosoftTeams-image_1_tiacii.jpg" alt="Logo"/>
          </Link>
        </div>
        <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to="/" onClick={toggleNavbar}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/courses" onClick={toggleNavbar}>
                Courses
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/about" onClick={toggleNavbar}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/contactus" onClick={toggleNavbar}>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/login" onClick={toggleNavbar}>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/signup" onClick={toggleNavbar}>
                <button className='btn-sign' type="button">Sign up</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
