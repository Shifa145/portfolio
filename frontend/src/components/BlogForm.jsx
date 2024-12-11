import React, { useState } from 'react';
import axios from 'axios';
import '../styles/BlogForm.css'; // Ensure the CSS file is created and linked

const BlogForm = ({ onSubmitSuccess }) => {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('excerpt', excerpt);
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      const response = await axios.post('/api/blogs', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.status === 201) {
        onSubmitSuccess();
        alert('Blog added successfully!');
        setTitle('');
        setExcerpt('');
        setContent('');
        setImage(null);
      }
    } catch (error) {
      console.error('Error submitting blog:', error);
      alert('Failed to submit the blog.');
    }
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="excerpt">Excerpt</label>
        <textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;
