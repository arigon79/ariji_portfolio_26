import React from 'react';
import Blogs from '../components/blogs.jsx';

const BlogsPage = () => {
  return (
    <div className="home-page-layout">
      <section className="content-section">
        <div className="content-section-inner">
          <Blogs />
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
