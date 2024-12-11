// components/Dashboard.jsx
import React from 'react';
import BlogForm from '../components/BlogForm';
import ProjectForm from '../components/ProjectForm';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Manage your portfolio content here.</p>
      </header>
      <section className="dashboard-section">
        <h2>Manage Blogs</h2>
        <BlogForm />
      </section>
      <section className="dashboard-section">
        <h2>Manage Projects</h2>
        <ProjectForm />
      </section>
    </div>
  );
};

export default Dashboard;
