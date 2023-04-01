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
    changePeopleSearchText: (state, { payload: searchText }) => {
      state.searchText = searchText;
    },
    changeSearchPeoplePage: (state, { payload: page }) => {
      state.page = page;
    },
    removeSearchPeople: (state) => {
      state.searchPeople = [];
    },
    fetchSearchPeople: () => { },
  },
});

export const {
  loadSearchPeople,
  loadSearchPeopleSuccess,
  loadSearchPeopleError,
  changePeopleSearchText,
  removeSearchPeople,
  fetchSearchPeople,
} = searchPeopleSlice.actions;

const selectSearchPeopleState = (state) => state.searchPeople;

export const selectSearchPeople = (state) => selectSearchPeopleState(state).searchPeople.results;
export const selectPeopleTotalResults = (state) =>
  selectSearchPeopleState(state).searchPeople.total_results;
export const selectPeopleSearchText = (state) => selectSearchPeopleState(state).searchText;
export const selectPeopleTotalPages = (state) => selectSearchPeopleState(state).searchPeople.total_pages;
export const selectSearchPeopleStatus = (state) => selectSearchPeopleState(state).status;
export const selectSearchPeoplePage = (state) => selectSearchPeopleState(state).page;
export default searchPeopleSlice.reducer;
