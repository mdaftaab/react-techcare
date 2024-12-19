import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_USERNAME = import.meta.env.VITE_API_USERNAME;
const API_PASSWORD = import.meta.env.VITE_API_PASSWORD;

export const fetchPatients = async () => {
  try {
    const response = await axios.get(API_URL, {
      auth: {
        username: API_USERNAME,
        password: API_PASSWORD,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};
