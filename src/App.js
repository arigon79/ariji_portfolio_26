import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Hobbies, ResumePage, BlogsPage, ProjectsPage } from './pages';
import { Footer, Hero } from './components';
import Navbar from './components/Navbar';
import './styles/App.css';

const MainPage = () => (
  <main className="main-content">
    <Hero />
    <Home />
  </main>
);

const PageLayout = ({ children }) => (
  <main className="main-content">
    <div style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
      <Navbar />
    </div>
    {children}
  </main>
);

const App = () => {
  return (
    <Router>
      <div className="app app-ethereal">
        <div className="page-shell">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/hobbies" element={<PageLayout><Hobbies /></PageLayout>} />
            <Route path="/resume" element={<PageLayout><ResumePage /></PageLayout>} />
            <Route path="/projects" element={<PageLayout><ProjectsPage /></PageLayout>} />
            <Route path="/blogs" element={<PageLayout><BlogsPage /></PageLayout>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
