import React from 'react';

const About = ({ text }) => {
    return (
      <div id="about-container">
        <h2>About Us</h2>
        <p>
        {text}
        </p>
      </div>
    )
  }

export default About;
