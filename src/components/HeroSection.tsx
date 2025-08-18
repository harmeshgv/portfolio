import React from 'react';
import heroImage from '../assets/profie-pic.jpg';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="hero"> {/* Added id="hero" */}
      <div className="hero-text">
        <h2 className="welcome">Hello, I'm Harmesh</h2>
        <p>
          A college student with a strong interest in technology <br />
          and a problem-solving mindset.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-black">View Projects</a>
          <a href="#contact" className="btn btn-white">Contact Me</a>
        </div>
      </div>
      <div className="hero-image">
        <img src = {heroImage} alt="Harmesh, technology enthusiast and problem solver" />
      </div>
    </section>
  );
};

export default HeroSection;
