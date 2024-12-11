import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ErrorMessage.css'; // Make sure the CSS file exists in the appropriate folder

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
      {message && (
        <>
          <span>{message}</span>
          <button onClick={() => { /* Logic to dismiss the error message */ }}>Dismiss</button>
        </>
      )}
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
