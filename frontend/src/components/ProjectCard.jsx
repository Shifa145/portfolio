import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css'; // Import the CSS file for project card styling

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={require(`../assets/images/${project1.jpg}`)} alt={project.title} />
      <h3>Modern Calculator App</h3>
      <p>Calculator App which is used for MAthematical Functions. It is build using HTML, CSS & Javascript</p>
      <Link to={`/project/${project.id}`}>View Project</Link>
    </div>
  );
};

export default ProjectCard;
