// services/authService.js

const API_BASE_URL = '/api/auth'; // Base API endpoint for authentication

// Registers a new user
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Registration failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Error during user registration:', error.message);
    throw error;
  }
};

// Logs in a user
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Error during login:', error.message);
    throw error;
  }
};

// Logs out a user
export const logoutUser = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/logout`, { method: 'POST' });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Logout failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Error during logout:', error.message);
    throw error;
  }
};

// Fetches the current user session
export const getCurrentUser = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/current-user`);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to fetch current user');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching current user:', error.message);
    throw error;
  }
};
