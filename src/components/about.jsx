import React from 'react';
import '../styles/home.css';

const About = () => {
  return (
    <div className="home">
      <section className="intro">
        <div className="intro-grid">
          <div className="bio">
            <p>
              I am a junior computer science student at Drexel University focusing on ML and Vision. I am currently working at{' '}
              <a href="https://vilab-group.com/" target="_blank" rel="noopener noreferrer" className="email-link">vilab</a>{' '}
              under <a href="https://liufeng2915.github.io/" target="_blank" rel="noopener noreferrer" className="email-link">dr. feng liu</a>.
            </p>
            <p>
              I also do web dev and currently building my own SAAS startup (stealth).
            </p>
            <p>
              i love hackathons and have attended around 20 at Stanford, MIT, Princeton, UPenn, Columbia, Hopkins, and more.
            </p>
            <p>
              contact me at: <a href="mailto:ac4393@drexel.edu" className="email-link">ac4393@drexel.edu</a> or discord <strong>#arigon3406</strong>
            </p>

            <div className="links-list-section" style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#111' }}>links</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li><a href="https://scholar.google.com/citations?hl=en&authuser=7&user=ue5rhwoAAAAJ" target="_blank" rel="noopener noreferrer" className="email-link">google scholar</a></li>
                <li><a href="https://github.com/arijitchakma79/" target="_blank" rel="noopener noreferrer" className="email-link">github</a></li>
                <li><a href="https://www.linkedin.com/in/arijitchakma/" target="_blank" rel="noopener noreferrer" className="email-link">linkedin</a></li>
                <li><a href="https://x.com/arigon79" target="_blank" rel="noopener noreferrer" className="email-link">x</a></li>
              </ul>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#111' }}>research interest</h3>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <li>2D / 3D / 4D generation</li>
                <li>applied LLMs</li>
                <li>human-computer interaction (HCI)</li>
              </ul>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#111' }}>hobbies</h3>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <li>gym</li>
                <li>read history</li>
                <li>doomscrolling and brain rotting</li>
                <li>walking around hopelessly in the street</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
