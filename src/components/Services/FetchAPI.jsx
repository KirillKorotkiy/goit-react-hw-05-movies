import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const key = 'fbc76dc8ab4d0da433d9be06ec2fd63f';
export const IMG_URL = 'https://image.tmdb.org/t/p/w300';

export const fetchAPI = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${key}`);
  return response.data.results;
};

export const fetchMovieById = async id => {
  const response = await axios.get(`/movie/${id}?api_key=${key}`);
  return response.data;
};

export const fetchCastList = async id => {
  const respose = await axios.get(`/movie/${id}/credits?api_key=${key}`);
  return respose.data.cast;
};

export const fetchReviewsById = async id => {
  const respose = await axios.get(`/movie/${id}/reviews?api_key=${key}&page=1`);
  return respose.data.results;
};

export const fetchSearchMovie = async query => {
  const respose = await axios.get(`/search/movie?api_key=${key}&query=${query}`);
  return respose.data.results;
};
