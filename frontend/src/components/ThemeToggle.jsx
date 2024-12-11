import React from 'react';
import { useTheme } from '../context/ThemeContext.js'; // Access the theme context
import lightIcon from '../assets/icons/dark_light.svg'; // Custom light mode icon
import darkIcon from '../assets/icons/dark_light.svg'; // Custom dark mode icon

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <img
        src={theme === 'light' ? darkIcon : lightIcon}
        alt={`${theme === 'light' ? 'Dark' : 'Light'} mode icon`}
        width={24}
        height={24}
      />
    </button>
  );
};

export default ThemeToggle;
