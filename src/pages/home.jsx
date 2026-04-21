import React from 'react';
import About from '../components/about';
import '../styles/hero.css';

const Home = () => {
  return (
    <div className="home-page-layout">
      <section id="about-section" className="content-section">
        <div className="content-section-inner">
          <About />
        </div>
      </section>
    </div>
  );
};

export default Home;
