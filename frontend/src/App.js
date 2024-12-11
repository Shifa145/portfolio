import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Removed BrowserRouter to avoid nesting
import './App.css'; // Main styles for the app
import ThemeToggle from './components/ThemeToggle'; // Theme toggle component for dark/light mode
import Header from './components/Header'; // Navigation header
import Footer from './components/Footer'; // Footer for the site
import Home from './pages/Home'; // Home page
import Dashboard from './pages/Dashboard'; // Dashboard page
import Blog from './pages/Blog'; // Blog page
import Project from './pages/Project'; // Project page
import Contact from './pages/Contact'; // Contact page
import NotFound from './pages/NotFound'; // 404 Not Found page
import Login from './pages/Login'; // Login page
import Register from './pages/Register'; // Register page
import { ThemeProvider } from './context/ThemeContext.js'; // Context for theme management

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <ThemeToggle /> {/* Theme toggle icon for switching themes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} /> {/* 404 Page */}
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
