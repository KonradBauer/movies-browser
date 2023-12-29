import axios from "axios";

const APIKey = process.env.REACT_APP_API_KEY;

const APIUrl = "https://api.themoviedb.org/3";

const language = "&language=en-US";

export const APIImageUrl = "https://image.tmdb.org/t/p";

export const getMovie = (movieID) => {
  return axios
    .get(`${APIUrl}/movie/${movieID}?api_key=${APIKey}${language}`)
    .then((response) => response.data);
};

export const getMovieCredits = (movieID) => {
  return axios
    .get(`${APIUrl}/movie/${movieID}/credits?api_key=${APIKey}${language}`)
    .then((response) => response.data);
};

export const getPopularMovies = (page) => {
  return axios
    .get(`${APIUrl}/movie/popular?api_key=${APIKey}${language}&page=${page}`)
    .then((response) => response.data);
};

export const getGenres = () => {
  return axios
    .get(`${APIUrl}/genre/movie/list?api_key=${APIKey}${language}`)
    .then((response) => response.data);
};

export const getPeople = (peopleID) => {
  return axios
    .get(`${APIUrl}/person/${peopleID}?api_key=${APIKey}${language}`)
    .then((response) => response.data);
};

export const getPeopleCredits = (peopleID) => {
  return axios
    .get(`${APIUrl}/person/${peopleID}/movie_credits?api_key=${APIKey}${language}`)
    .then((response) => response.data);
};

export const getPopularPeople = (page) => {
  return axios
    .get(`${APIUrl}/person/popular?api_key=${APIKey}${language}&page=${page}`)
    .then((response) => response.data);
};

export const searchMovie = (page, searchText) => {
  return axios
    .get(`${APIUrl}/search/movie?api_key=${APIKey}${language}&page=${page}&query=${searchText}`)
    .then((response) => response.data);
};

export const searchPeople = (page, searchText) => {
  return axios
    .get(`${APIUrl}/search/person?api_key=${APIKey}${language}&page=${page}&query=${searchText}`)
    .then((response) => response.data);
};

export const configuration = () => {
  return axios
    .get(`${APIUrl}/configuration?api_key=${APIKey}${language}`)
    .then((response) => response.data);
};
