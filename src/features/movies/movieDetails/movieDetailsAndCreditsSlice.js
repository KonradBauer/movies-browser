import { createSlice } from "@reduxjs/toolkit";

const movieDetailsAndCreditsSlice = createSlice({
  name: "movieDetailsAndCredits",
  initialState: {
    movieDetails: [],
    movieCredits: [],
    status: "initial",
  },
  reducers: {
    loadMovieDetails: ({ status }) => {
      status = "loading";
    },
    loadMovieDetailsSuccess: (state, { payload: movieDetails }) => {
      state.movieDetails = movieDetails;
      state.status = "success";
    },
    loadMovieCreditsSuccess: (state, { payload: movieCredits }) => {
      state.movieCredits = movieCredits;
      state.status = "success";
    },
    loadMovieDetailsError: ({ status }) => {
      status = "error";
    },
    fetchMovieDetailsAndCredits: () => {},
  },
});

export const {
  loadMovieDetails,
  loadMovieDetailsSuccess,
  loadMovieCreditsSuccess,
  loadMovieDetailsError,
  fetchMovieDetailsAndCredits,
} = movieDetailsAndCreditsSlice.actions;

const selectMovieDetailsAndCreditsState = (state) => state.movieDetailsAndCredits;

export const selectMovieDetailsStatus = (state) => selectMovieDetailsAndCreditsState(state).status;
export const selectMovieDetails = (state) => selectMovieDetailsAndCreditsState(state).movieDetails;
export const selectMovieCredits = (state) => selectMovieDetailsAndCreditsState(state).movieCredits;

export default movieDetailsAndCreditsSlice.reducer;
