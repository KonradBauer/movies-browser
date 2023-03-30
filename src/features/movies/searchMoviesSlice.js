import { createSlice } from "@reduxjs/toolkit";

const searchMoviesSlice = createSlice({
  name: "searchMovies",
  initialState: {
    searchMovies: [],
    status: "initial",
    searchText: "",
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
    changeSearchText: (state, {payload: searchText}) => {
      state.searchText = searchText;
    },
    fetchSearchMovies: () => {},
  },
});

export const { loadSearchMovies, loadSearchMoviesSuccess, loadSearchMoviesError, changeSearchText, fetchSearchMovies } =
  searchMoviesSlice.actions;

const selectSearchMoviesState = (state) => state.searchMovies;

export const selectSearchMovies = (state) => selectSearchMoviesState(state).searchMovies.results;
export const selectTotalResults = (state) => selectSearchMoviesState(state).searchMovies.total_results;
export const selectSearchText = (state) => selectSearchMoviesState(state).searchText;

export default searchMoviesSlice.reducer;
