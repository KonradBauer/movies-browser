import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    page: 1,
    pageLast: 500,
    movieID: null,
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
    pageIncrement: (state) => {
      state.page === 500 ? (state.page = 500) : (state.page += 1);
    },
    pageDecrement: (state) => {
      state.page === 1 ? (state.page = 1) : (state.page -= 1);
    },
    pageFirst: (state) => {
      state.page = 1;
    },
    pageLast: (state) => {
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
  pageIncrement,
  pageDecrement,
  pageFirst,
  pageLast,
  fetchMovies,
  getPages,
  getMovieID,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMoviesStatus = (state) => selectMoviesState(state).status;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectPages = (state) => selectMoviesState(state).page;
export const selectMovieID = (state) => selectMoviesState(state).movieID;

export default moviesSlice.reducer;
