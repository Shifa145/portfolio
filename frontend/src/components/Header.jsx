import React from 'react';
import { Link } from 'react-router-dom';
import darkModeIcon from '../assets/icons/dark_light.svg'; // Correct path for dark mode icon
import lightModeIcon from '../assets/icons/dark_light.svg'; // Correct path for light mode icon
import profileImage from '../assets/icons/profile.svg'; // Correct path for profile image
import ThemeToggle from './ThemeToggle'; // Import the ThemeToggle component
import '../styles/Header.css'; // Import the CSS file for header styling

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </div>
    </header>
  );
};

export default Header;
