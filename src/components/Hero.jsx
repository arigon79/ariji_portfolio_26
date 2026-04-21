import React from 'react';
import Typewriter from './Typewriter';
import Navbar from './Navbar';
import profilePic from '../assets/IMGo_15012.jpg';
import '../styles/hero.css';

const Hero = () => {
  const typewriterPhrases = [
    'junior at Drexel University 🐉',
    'researcher 🔬',
    'software engineer 💻',
  ];

  return (
    <header className="hero">
      <Navbar />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">hi, i'm ariji</h1>
          <p className="hero-tagline">
            <Typewriter
              phrases={typewriterPhrases}
              typingSpeed={80}
              deletingSpeed={45}
              pauseTime={2200}
            />
          </p>
        </div>
        <img src={profilePic} alt="Arijit Chakma" className="hero-avatar" />
      </div>
    </header>
  );
};

export default Hero;
