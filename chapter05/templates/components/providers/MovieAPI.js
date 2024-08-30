import axios from 'axios';

export const getMovies = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const getMovie = async (url, id) => {
  const response = await axios.get(`${url}${id}/`);
  return response.data;
};

export const createMovie = async (url, content) => {
  const response = await axios.post(url, content);
  return response.data;
};

export const updateMovie = async (url, id, content) => {
  const response = await axios.put(`${url}${id}/`, content);
  return response.data;
};

export const deleteMovie = async (url, id) => {
  const response = await axios.delete(`${url}${id}/`);
  return response.data;
};
