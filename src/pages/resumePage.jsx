import React from 'react';
import Resume from '../components/resume';

const ResumePage = () => {
  return (
    <div className="home-page-layout">
      <section className="content-section">
        <div className="content-section-inner">
          <Resume />
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
