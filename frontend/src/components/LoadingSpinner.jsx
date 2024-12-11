import React from 'react';
import spinnerIcon from '../assets/icons/spinner.svg'; // Correct path for spinner icon

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <img src={spinnerIcon} alt="Loading spinner" className="spinner-icon" />
    </div>
  );
};

export default LoadingSpinner;
