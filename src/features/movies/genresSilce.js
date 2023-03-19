import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: [],
    status: "initial",
  },
  reducers: {
    loadGenres: ({ status }) => {
      status = "loading";
    },
    loadGenresSuccess: (state, { payload: genres }) => {
      state.genres = genres;
      state.status = "success";
    },
    loadGenresError: ({ status }) => {
      status = "error";
    },
    fetchGenres: () => {},
  },
});

export const { loadGenres, loadGenresSuccess, loadGenresError, fetchGenres } =
  genresSlice.actions;

const selectGenresState = (state) => state.genres;

export const selectGenres = (state) => selectGenresState(state).genres;

export default genresSlice.reducer;
