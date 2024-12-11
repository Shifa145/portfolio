import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/project.css';
import spinnerIcon from '../assets/icons/spinner.svg'; // Ensure this path matches your project structure

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the project data from the backend
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${id}`);
        const data = await response.json();
        setProject(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching project:', error);
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <img src={spinnerIcon} alt="Loading" />
        <p>Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Project Not Found</h1>
        <p>The project you're looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="project-page">
      <h1>{project.title}</h1>
      <img
        src={require(`../assets/images/${project.image}`)}
        alt={project.title}
        className="project-image"
      />
      <p>{project.description}</p>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
