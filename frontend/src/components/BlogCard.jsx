import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/BlogCard.css'; // Styling file

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img
        src={require(`../assets/images/${blog.image}`)} // Ensure the path matches your folder structure
        alt={blog.title}
        className="blog-image"
      />
      <div className="blog-content">
        <h3 className="blog-title">Blog About my Journey in Web Development</h3>
        <p className="blog-excerpt">{blog.excerpt}</p>
        <Link to={`/blog/${blog.id}`} className="blog-read-more">
          Read More
        </Link>
      </div>
    </div>
  );
};

// PropTypes for validation
BlogCard.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCard;
