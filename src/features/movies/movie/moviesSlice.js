import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    page: null,
    movieID: null,
    status: "initial",
  },
  reducers: {
    loadMovies: ({ status }) => {
      status = "loading";
    },
    loadMoviesSuccess: (state, { payload: movies }) => {
      state.movies = movies;
      state.status = "success";
    },
    loadMoviesError: ({ status }) => {
      status = "error";
    },
    getPages: (state, { payload: page }) => {
      state.page = page;
    },
    getMovieID: (state, { payload: movieID }) => {
      state.movieID = movieID;
    },
    fetchMovies: () => {},
  },
});

export const { loadMovies, loadMoviesSuccess, loadMoviesError, fetchMovies, getPages, getMovieID } =
  moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMoviesStatus = (state) => selectMoviesState(state).status;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectPages = (state) => selectMoviesState(state).pages;
export const selectMovieID = (state) => selectMoviesState(state).movieID;

export default moviesSlice.reducer;
