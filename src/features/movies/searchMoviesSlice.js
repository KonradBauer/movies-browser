import { createSlice } from "@reduxjs/toolkit";

const searchMoviesSlice = createSlice({
  name: "searchMovies",
  initialState: {
    searchMovies: [],
    status: "initial",
    searchText: "",
    page: 1,
  },
  reducers: {
    loadSearchMovies: (state) => {
      state.status = "loading";
    },
    loadSearchMoviesSuccess: (state, { payload: searchMovies }) => {
      state.searchMovies = searchMovies;
      state.status = "success";
    },
    loadSearchMoviesError: (state) => {
      state.status = "error";
    },
    changeSearchMoviesPage: (state, { payload: page }) => {
      state.page = page;
    },
    changeSearchText: (state, { payload: searchText }) => {
      state.searchText = searchText;
    },
    fetchSearchMovies: () => {},
  },
});

export const {
  loadSearchMovies,
  loadSearchMoviesSuccess,
  loadSearchMoviesError,
  changeSearchMoviesPage,
  changeSearchText,
  fetchSearchMovies,
} = searchMoviesSlice.actions;

const selectSearchMoviesState = (state) => state.searchMovies;

export const selectSearchMovies = (state) => selectSearchMoviesState(state).searchMovies.results;
export const selectTotalResults = (state) =>
  selectSearchMoviesState(state).searchMovies.total_results;
export const selectSearchText = (state) => selectSearchMoviesState(state).searchText;
export const selectTotalPages = (state) => selectSearchMoviesState(state).searchMovies.total_pages;
export const selectSearchMoviesStatus = (state) => selectSearchMoviesState(state).status;
export const selectSearchMoviesPage = (state) => selectSearchMoviesState(state).page;

export default searchMoviesSlice.reducer;
