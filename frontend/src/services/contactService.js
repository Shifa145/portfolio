import axios from 'axios';

const sendContactForm = async (data) => {
  try {
    const response = await axios.post('/api/contact', data);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

export default sendContactForm;
