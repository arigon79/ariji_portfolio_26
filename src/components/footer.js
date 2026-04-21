import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer classy-footer">
      <p className="footer-copy">© {new Date().getFullYear()} Arijit Chakma</p>
    </footer>
  );
};

export default Footer;
