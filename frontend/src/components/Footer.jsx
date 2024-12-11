import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // Ensure correct path to the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="social-links">
          <li>
            <Link to="/profile" className="footer-link">
              <img src={require('../assets/icons/profile.svg')} alt="Profile" />
            </Link>
          </li>
          <li>
            <Link to="/contact" className="footer-link">
              <img src={require('../assets/icons/contact.svg')} alt="Contact" />
            </Link>
          </li>
          {/* Add more social media links as needed */}
        </ul>
        <p>&copy; {new Date().getFullYear()} SIFA THAHASIN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
