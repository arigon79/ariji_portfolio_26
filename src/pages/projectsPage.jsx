import React from 'react';
import Projects from '../components/project';

const ProjectsPage = () => {
  return (
    <div className="home-page-layout">
      <section className="content-section">
        <div className="content-section-inner">
          <Projects />
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
