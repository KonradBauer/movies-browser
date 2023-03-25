import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    peopleID: null,
    status: "initial",
  },
  reducers: {
    loadPeople: ({ status }) => {
      status = "loading";
    },
    loadPeopleSuccess: (state, { payload: people }) => {
      state.people = people;
      state.status = "success";
    },
    loadPeopleError: (state) => {
      state.status = "error";
    },
    getPeopleID: (state, { payload: peopleID }) => {
      state.peopleID = peopleID;
    },
    fetchPeople: () => {},
  },
});

export const { loadPeople, loadPeopleSuccess, loadPeopleError, getPeopleID, fetchPeople } =
  peopleSlice.actions;

const selectPeopleState = (state) => state.people;

export const selectPeopleStatus = (state) => selectPeopleState(state).status;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectPeopleID = (state) => selectPeopleState(state).peopleID;

export default peopleSlice.reducer;
