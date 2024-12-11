import axios from 'axios';

const fetchProjects = async () => {
  try {
    const response = await axios.get('/api/projects');
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

const addProject = async (data) => {
  try {
    const response = await axios.post('/api/projects', data);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

const updateProject = async (id, data) => {
  try {
    const response = await axios.put(`/api/projects/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

const deleteProject = async (id) => {
  try {
    const response = await axios.delete(`/api/projects/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

export { fetchProjects, addProject, updateProject, deleteProject };
