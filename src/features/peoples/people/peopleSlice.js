import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
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
    loadPeopleError: ({ status }) => {
      status = "error";
    },
  },
});

export const { loadPeople, loadPeopleSuccess, loadPeopleError } = peopleSlice.actions;

const selectPeopleState = (state) => state.people;

export const selectPeopleStatus = (state) => selectPeopleState(state).status;
export const selectPeople = (state) => selectPeopleState(state).people;

export default peopleSlice.reducer;
