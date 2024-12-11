// api.js

import axios from 'axios';

// Configure the base URL for the backend API
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL|| 'http://localhost:3000' // Replace with your API base URL
});

// Function to get all blogs
export const getBlogs = async () => {
  try {
    const response = await api.get('/blogs');
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

// Function to create a new blog
export const createBlog = async (blogData) => {
  try {
    const response = await api.post('/blogs', blogData);
    return response.data;
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

// Function to get a specific blog by ID
export const getBlogById = async (id) => {
  try {
    const response = await api.get(`/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
};

// Function to update a blog
export const updateBlog = async (id, blogData) => {
  try {
    const response = await api.put(`/blogs/${id}`, blogData);
    return response.data;
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
};

// Function to delete a blog
export const deleteBlog = async (id) => {
  try {
    await api.delete(`/blogs/${id}`);
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
};

// Example API call
fetch('/api/projects')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
