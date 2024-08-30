import axios from 'axios';

export const getMovies = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const getMovie = async (url, id) => {};

export const createMovie = async (url, content) => {};

export const updateMovie = async (url, id, content) => {};

export const deleteMovie = async (url, id) => {};
