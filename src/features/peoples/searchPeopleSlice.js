import { createSlice } from "@reduxjs/toolkit";

const searchPeopleSlice = createSlice({
  name: "searchPeople",
  initialState: {
    searchPeople: [],
    status: "initial",
    searchText: "",
    page: 1,
  },
  reducers: {
    loadSearchPeople: (state) => {
      state.status = "loading";
    },
    loadSearchPeopleSuccess: (state, { payload: searchPeople }) => {
      state.searchPeople = searchPeople;
      state.status = "success";
    },
    loadSearchPeopleError: (state) => {
      state.status = "error";
    },
    searchPeoplePageIncrement: (state) => {
      state.page === 500 ? (state.page = 500) : (state.page += 1);
    },
    searchPeoplePageDecrement: (state) => {
      state.page === 1 ? (state.page = 1) : (state.page -= 1);
    },
    setPeoplePageFirst: (state) => {
      state.page = 1;
    },
    setPeoplePageLast: (state) => {
      state.page = state.searchPeople.total_pages;
    },
    changePeopleSearchText: (state, { payload: searchText }) => {
      state.searchText = searchText;
    },
    changeSearchPeoplePage: (state, { payload: page }) => {
      state.page = page;
    },
    removeSearchPeople: (state) => {
      state.searchPeople = [];
      state.status = "initial";
    },
    fetchSearchPeople: () => {},
  },
});

export const {
  loadSearchPeople,
  loadSearchPeopleSuccess,
  loadSearchPeopleError,
  searchPeoplePageIncrement,
  searchPeoplePageDecrement,
  setPeoplePageFirst,
  setPeoplePageLast,
  changePeopleSearchText,
  removeSearchPeople,
  fetchSearchPeople,
} = searchPeopleSlice.actions;

const selectSearchPeopleState = (state) => state.searchPeople;

export const selectSearchPeople = (state) => selectSearchPeopleState(state).searchPeople.results;
export const selectPeopleTotalResults = (state) =>
  selectSearchPeopleState(state).searchPeople.total_results;
export const selectPeopleSearchText = (state) => selectSearchPeopleState(state).searchText;
export const selectPeopleTotalPages = (state) =>
  selectSearchPeopleState(state).searchPeople.total_pages;
export const selectSearchPeopleStatus = (state) => selectSearchPeopleState(state).status;
export const selectSearchPeoplePage = (state) => selectSearchPeopleState(state).page;
export default searchPeopleSlice.reducer;
