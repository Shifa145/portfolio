import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';
import errorIcon from '../assets/icons/error.svg'; // Ensure this path matches your project structure

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={errorIcon} alt="404 Error" className="error-icon" />
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
