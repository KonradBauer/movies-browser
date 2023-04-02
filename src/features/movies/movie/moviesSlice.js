import { createSlice } from "@reduxjs/toolkit";
import { getIdLoaclStorage } from "../../idLocalStorage";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    page: 1,
    pageLast: 500,
    movieID: getIdLoaclStorage("movieId"),
    status: "initial",
  },
  reducers: {
    loadMovies: (state) => {
      state.status = "loading";
    },
    loadMoviesSuccess: (state, { payload: movies }) => {
      state.movies = movies;
      state.status = "success";
    },
    loadMoviesError: (state) => {
      state.status = "error";
    },
    moviesPageIncrement: (state) => {
      state.page === 500 ? (state.page = 500) : (state.page += 1);
    },
    moviesPageDecrement: (state) => {
      state.page === 1 ? (state.page = 1) : (state.page -= 1);
    },
    moviesPageFirst: (state) => {
      state.page = 1;
    },
    moviesPageLast: (state) => {
      state.page = 500;
    },
    getMovieID: (state, { payload: movieID }) => {
      state.movieID = movieID;
    },
    fetchMovies: () => {},
  },
});

export const {
  loadMovies,
  loadMoviesSuccess,
  loadMoviesError,
  moviesPageIncrement,
  moviesPageDecrement,
  moviesPageFirst,
  moviesPageLast,
  fetchMovies,
  getPages,
  getMovieID,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMoviesStatus = (state) => selectMoviesState(state).status;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMoviesPages = (state) => selectMoviesState(state).page;
export const selectMovieID = (state) => selectMoviesState(state).movieID;

export default moviesSlice.reducer;
