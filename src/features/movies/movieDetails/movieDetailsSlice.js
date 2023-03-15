import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieDetails: [],
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
    loadMovieDetailsError: ({ status }) => {
      status = "error";
    },
  },
});

export const { loadMovieDetails, loadMovieDetailsSuccess, loadMovieDetailsError } =
  movieDetailsSlice.actions;

const selectMovieDetailsState = (state) => state.movieDetails;

export const selectMovieDetailsStatus = (state) => selectMovieDetailsState(state).status;
export const selectMovieDetails = (state) => selectMovieDetailsState(state).movieDetails;

export default movieDetailsSlice.reducer;
