import axios from "axios";

const APIKey = "api_key=3e394a9af0efdb2c94230c775212175a";

const APIUrl = "https://api.themoviedb.org/3";

const language = "&language=en-US";

export const APIImageUrl = "https://image.tmdb.org/t/p";

export const getMovie = () => {
  return axios
    .get(`${APIUrl}/movie/{movie_id}?${APIKey}${language}`)
    .then((response) => response.data)
    .catch(handleError);
};

export const getMovieCredits = () => {
  return axios
    .get(`${APIUrl}/movie/{movie_id}/credits?${APIKey}${language}`)
    .then((response) => response.data)
    .catch(handleError);
};

export const getPopularMovies = () => {
  return axios
    .get(`${APIUrl}/movie/popular?${APIKey}${language}`)
    .then((response) => response.data)
    .catch(handleError);
};

export const getGenres = () => {
  return axios
    .get(`${APIUrl}/genre/movie/list?${APIKey}${language}`)
    .then((response) => response.data)
    .catch(handleError);
};

export const getPeople = () => {
  return axios
    .get(`${APIUrl}/person/{person_id}?${APIKey}${language}`)
    .then((response) => response.data)
    .catch(handleError);
};

export const getPeopleCredits = () => {
  return axios
    .get(`${APIUrl}/person/{person_id}/movie_credits?${APIKey}${language}`)
    .then((response) => response.data)
    .catch(handleError);
};

export const getPopularPeople = () => {
  return axios
    .get(`${APIUrl}/person/popular?${APIKey}${language}`)
    .then((response) => response.data)
    .catch(handleError);
};

export const searchMovie = () => {
  return axios
    .get(`${APIUrl}/search/movie?${APIKey}${language}`)
    .then((response) => response.data)
    .catch(handleError);
};

export const searchPeople = () => {
  return axios
    .get(`${APIUrl}/search/person?${APIKey}${language}`)
    .then((response) => response.data)
    .catch(handleError);
};

export const configuration = () => {
  return axios
    .get(`${APIUrl}/configuration?${APIKey}${language}`)
    .then((response) => response.data)
    .catch(handleError);
};

export const handleError = (error) => {
  if (error.response) {
    console.log("Error response:", error.response.data);
  } else if (error.request) {
    console.log("Error request:", error.request);
  } else {
    console.log("Error message:", error.message);
  }
};
