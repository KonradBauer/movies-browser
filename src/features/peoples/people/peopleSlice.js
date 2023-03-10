import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: null,
    status: "initial",
  },
  reducers: {
    loadPeople: () => ({
      people: null,
      status: "loading",
    }),
    loadPeopleSuccess: (state, { payload: people }) => ({
      people,
      status: "success",
    }),
    loadPeopleError: () => ({ people: null, status: "error" }),
  },
});

export const { loadPeople, loadPeopleSuccess, loadPeopleError } = peopleSlice.actions;

const selectPeopleState = (state) => state.people;

export const selectPeopleStatus = (state) => selectPeopleState(state).status;
export const selectPeople = (state) => selectPeopleState(state).people;

export default peopleSlice.reducer;
