import axios from "axios";

const APIKey = "api_key=3e394a9af0efdb2c94230c775212175a";

const APIUrl = "https://api.themoviedb.org/3";

const APIImageUrl = "https://image.tmdb.org/t/p";

export const getMovie = () => {
  axios
    .get(`"${APIUrl}/movie/{movie_id}?${APIKey}&language=en-US"`)
    .then((response) => response.data);
};

export const getMovieCredits = () => {
  axios
    .get(`"${APIUrl}/movie/{movie_id}/credits?${APIKey}&language=en-US"`)
    .then((response) => response.data);
};

export const getPopularMovies = () => {
  axios.get(`"${APIUrl}/movie/popular?${APIKey}&language=en-US"`).then((response) => response.data);
};

export const getPeople = () => {
  axios
    .get(`"${APIUrl}/person/{person_id}?${APIKey}&language=en-US"`)
    .then((response) => response.data);
};

export const getPeopleCredits = () => {
  axios
    .get(`"${APIUrl}/person/{person_id}/movie_credits?${APIKey}&language=en-US"`)
    .then((response) => response.data);
};

export const getPopularPeople = () => {
  axios
    .get(`"${APIUrl}/person/popular?${APIKey}&language=en-US"`)
    .then((response) => response.data);
};

export const searchMovie = () => {
  axios.get(`"${APIUrl}/search/movie?${APIKey}&language=en-US"`).then((response) => response.data);
};

export const searchPeople = () => {
  axios.get(`"${APIUrl}/search/person?${APIKey}&language=en-US"`).then((response) => response.data);
};

export const configuration = () => {
  axios.get(`"${APIUrl}/configuration?${APIKey}&language=en-US"`).then((response) => response.data);
};
