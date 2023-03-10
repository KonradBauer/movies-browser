import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieDetails: null,
    status: "initial",
  },
  reducers: {
    loadMovieDetails: () => ({
      movieDetails: null,
      status: "loading",
    }),
    loadMovieDetailsSuccess: (state, { payload: movieDetails }) => ({
      movieDetails,
      status: "success",
    }),
    loadMovieDetailsError: () => ({ movieDetails: null, status: "error" }),
  },
});

export const { loadMovieDetails, loadMovieDetailsSuccess, loadMovieDetailsError } =
  movieDetailsSlice.actions;

const selectMovieDetailsState = (state) => state.movieDetails;

export const selectMovieDetailsStatus = (state) => selectMovieDetailsState(state).status;
export const selectMovieDetails = (state) => selectMovieDetailsState(state).movieDetails;

export default movieDetailsSlice.reducer;
