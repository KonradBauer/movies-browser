import axios from "axios";

const APIKey = "api_key=3e394a9af0efdb2c94230c775212175a";

const APIUrl = "https://api.themoviedb.org/3";

const language = "&language=en-US";

export const APIImageUrl = "https://image.tmdb.org/t/p";

export const getMovie = (movieID) => {
  return axios
    .get(`${APIUrl}/movie/${movieID}?${APIKey}${language}`)
    .then((response) => response.data);
};

export const getMovieCredits = (movieID) => {
  return axios
    .get(`${APIUrl}/movie/${movieID}/credits?${APIKey}${language}`)
    .then((response) => response.data);
};

export const getPopularMovies = (page) => {
  return axios
    .get(`${APIUrl}/movie/popular?${APIKey}${language}&page=${page}`)
    .then((response) => response.data);
};

export const getGenres = () => {
  return axios
    .get(`${APIUrl}/genre/movie/list?${APIKey}${language}`)
    .then((response) => response.data);
};

export const getPeople = (peopleID) => {
  return axios
    .get(`${APIUrl}/person/${peopleID}?${APIKey}${language}`)
    .then((response) => response.data);
};

export const getPeopleCredits = (peopleID) => {
  return axios
    .get(`${APIUrl}/person/${peopleID}/movie_credits?${APIKey}${language}`)
    .then((response) => response.data);
};

export const getPopularPeople = (page) => {
  return axios
    .get(`${APIUrl}/person/popular?${APIKey}${language}&page=${page}`)
    .then((response) => response.data);
};

export const searchMovie = (searchText) => {
  return axios
    .get(`${APIUrl}/search/movie?${APIKey}${language}&query=${searchText}`)
    .then((response) => response.data);
};

export const searchPeople = searchText => {
  return axios
    .get(`${APIUrl}/search/person?${APIKey}${language}&query=${searchText}`)
    .then((response) => response.data);
};

export const configuration = () => {
  return axios
    .get(`${APIUrl}/configuration?${APIKey}${language}`)
    .then((response) => response.data);
};
