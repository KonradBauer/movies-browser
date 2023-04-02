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
    searchMoviesPageIncrement: (state) => {
      state.page === 500 ? (state.page = 500) : (state.page += 1);
    },
    searchMoviesPageDecrement: (state) => {
      state.page === 1 ? (state.page = 1) : (state.page -= 1);
    },
    setMoviesPageFirst: (state) => {
      state.page = 1;
    },
    setMoviesPageLast: (state) => {
      state.page = state.searchMovies.total_pages;
    },
    changeSearchMoviesPage: (state, { payload: page }) => {
      state.page = page;
    },
    changeMoviesSearchText: (state, { payload: searchText }) => {
      state.searchText = searchText;
    },
    removeSearchMovies: (state) => {
      state.searchMovies = [];
      state.status = "initial";
      state.page = null;
    },
    fetchSearchMovies: () => {},
  },
});

export const {
  loadSearchMovies,
  loadSearchMoviesSuccess,
  loadSearchMoviesError,
  searchMoviesPageIncrement,
  searchMoviesPageDecrement,
  setMoviesPageFirst,
  setMoviesPageLast,
  changeSearchMoviesPage,
  changeMoviesSearchText,
  removeSearchMovies,
  fetchSearchMovies,
} = searchMoviesSlice.actions;

const selectSearchMoviesState = (state) => state.searchMovies;

export const selectSearchMovies = (state) => selectSearchMoviesState(state).searchMovies.results;
export const selectMoviesTotalResults = (state) =>
  selectSearchMoviesState(state).searchMovies.total_results;
export const selectSearchMoviesText = (state) => selectSearchMoviesState(state).searchText;
export const selectMoviesTotalPages = (state) =>
  selectSearchMoviesState(state).searchMovies.total_pages;
export const selectSearchMoviesStatus = (state) => selectSearchMoviesState(state).status;
export const selectSearchMoviesPage = (state) => selectSearchMoviesState(state).page;

export default searchMoviesSlice.reducer;
