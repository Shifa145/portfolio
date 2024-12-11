// constants.js

// API URLs
export const API_BASE_URL = 'http://localhost:3000/api'; // Backend API base URL
export const BLOGS_API_URL = `${API_BASE_URL}/blogs`;
export const PROJECTS_API_URL = `${API_BASE_URL}/projects`;
export const CONTACTS_API_URL = `${API_BASE_URL}/contacts`;

// Status Codes
export const STATUS_OK = 200;
export const STATUS_CREATED = 201;
export const STATUS_NO_CONTENT = 204;

// Error Messages
export const ERROR_FETCHING_DATA = 'Error fetching data. Please try again later.';
export const ERROR_SAVING_DATA = 'Error saving data. Please try again.';
export const ERROR_NOT_FOUND = 'Resource not found.';

// Other Constants
export const IMAGE_FOLDER = '/assets/images';
export const ICON_FOLDER = '/assets/icons';
