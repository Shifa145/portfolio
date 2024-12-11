// services/blogService.js

const API_BASE_URL = '/api/blogs'; // Base API endpoint for blogs

// Fetches all blog posts
export const fetchBlogs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to fetch blogs');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching blogs:', error.message);
    throw error;
  }
};

// Fetches a single blog post by ID
export const fetchBlogById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to fetch blog');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog:', error.message);
    throw error;
  }
};

// Creates a new blog post
export const createBlog = async (blogData) => {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blogData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create blog');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating blog:', error.message);
    throw error;
  }
};

// Updates an existing blog post
export const updateBlog = async (id, blogData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blogData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update blog');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating blog:', error.message);
    throw error;
  }
};

// Deletes a blog post
export const deleteBlog = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to delete blog');
    }
    return await response.json();
  } catch (error) {
    console.error('Error deleting blog:', error.message);
    throw error;
  }
};
