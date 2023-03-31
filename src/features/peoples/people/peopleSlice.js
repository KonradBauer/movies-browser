import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    peopleID: null,
    status: "initial",
    page: 1,
  },
  reducers: {
    loadPeople: (state) => {
      state.status = "loading";
    },
    loadPeopleSuccess: (state, { payload: people }) => {
      state.people = people;
      state.status = "success";
    },
    loadPeopleError: (state) => {
      state.status = "error";
    },
    peoplePageIncrement: (state) => {
      state.page === 500 ? (state.page = 500) : (state.page += 1);
    },
    peoplePageDecrement: (state) => {
      state.page === 1 ? (state.page = 1) : (state.page -= 1);
    },
    peoplePageFirst: (state) => {
      state.page = 1;
    },
    peoplePageLast: (state) => {
      state.page = 500;
    },
    getPeopleID: (state, { payload: peopleID }) => {
      state.peopleID = peopleID;
    },
    fetchPeople: () => {},
  },
});

export const {
  loadPeople,
  loadPeopleSuccess,
  loadPeopleError,
  peoplePageIncrement,
  peoplePageDecrement,
  peoplePageFirst,
  peoplePageLast,
  getPeopleID,
  fetchPeople,
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;

export const selectPeopleStatus = (state) => selectPeopleState(state).status;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectPeopleID = (state) => selectPeopleState(state).peopleID;
export const selectPeoplePages = (state) => selectPeopleState(state).page;

export default peopleSlice.reducer;
