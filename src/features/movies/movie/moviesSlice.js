import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    page: null,
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
    fetchMovies: () => {},
    getPages: (state, { payload: page }) => {
      state.page = page;
    },
  },
});

export const { loadMovies, loadMoviesSuccess, loadMoviesError, fetchMovies, getPages } =
  moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMoviesStatus = (state) => selectMoviesState(state).status;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectPages = (state) => selectMoviesState(state).pages;

export default moviesSlice.reducer;
