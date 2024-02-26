// Home.js

import React, { useState, useEffect } from 'react';
import Navbar11 from '../Navbar11'; 
import Footer from '../Footer';

import  App1 from '../App1'


import './index.css';




const Home = () => {
  const [coursesCount, setCoursesCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [followersCount, setFollowersCount] = useState(0); 

  useEffect(() => {
    // Animate the counters on component mount
    animateCounter('courses', 110, setCoursesCount, 1500);
    animateCounter('students', 100, setStudentsCount, 4000);
   
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const animateCounter = (elementId, targetValue, setCount, duration) => {
    let start = 0;
    const increment = Math.ceil(targetValue / (duration / 16)); // 16ms is close to the ideal time for 60fps

    const updateCounter = () => {
      start += increment;
      setCount(start);

      if (start < targetValue) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <>
      <Navbar11 />
     
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Welcome To Nanoquest</h1>
          <img
            src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg"
            alt="clothes to be noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
            LearnAnything! AnyWhere
            "Welcome to Nanoquest, your gateway to transformative learning! Unlock boundless knowledge, explore diverse courses, and embark on an enriching educational journey tailored just for you. Let's empower your aspirations together at Nanoquest, where learning knows no limits.
          </p>
        

          {/* Animated Counters */}
        </div>
        <img
          src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg"
          alt="dresses to be noticed"
          className="home-desktop-img"
        />
      </div> 
      
          <App1/> 
          
          <Footer/>
          
    
    </>
  );
};

export default Home;
