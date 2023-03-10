import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: null,
    status: "initial",
  },
  reducers: {
    loadMovies: () => ({
      movies: null,
      status: "loading",
    }),
    loadMoviesSuccess: (state, { payload: movies }) => ({
      movies,
      status: "success",
    }),
    loadMoviesError: () => ({ movies: null, status: "error" }),
  },
});

export const { loadMovies, loadMoviesSuccess, loadMoviesError } = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMoviesStatus = (state) => selectMoviesState(state).status;
export const selectMovies = (state) => selectMoviesState(state).projects;

export default moviesSlice.reducer;
