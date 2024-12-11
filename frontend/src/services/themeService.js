import axios from 'axios';

const getCurrentTheme = async () => {
  try {
    const response = await axios.get('/api/theme');
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

const setTheme = async (theme) => {
  try {
    const response = await axios.post('/api/theme', { theme });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

export { getCurrentTheme, setTheme };
