import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
  name: "peopleDetails",
  initialState: {
    peopleDetails: [],
    peopleCredits: [],
    status: "initial",
  },
  reducers: {
    loadPeopleDetails: (state) => {
      state.status = "loading";
    },
    loadPeopleDetailsSuccess: (state, { payload: peopleDetails }) => {
      state.peopleDetails = peopleDetails;
      state.status = "success";
    },
    loadPeopleCreditsSuccess: (state, { payload: peopleCredits }) => {
      state.peopleCredits = peopleCredits;
      state.status = "success";
    },
    loadPeopleDetailsError: (state) => {
      state.status = "error";
    },
    fetchPeopleDetails: () => {},
  },
});

export const {
  loadPeopleDetails,
  loadPeopleDetailsSuccess,
  loadPeopleCreditsSuccess,
  loadPeopleDetailsError,
  fetchPeopleDetails,
} = peopleDetailsSlice.actions;

const selectPeopleDetailsState = (state) => state.peopleDetails;

export const selectPeopleDetailsStatus = (state) => selectPeopleDetailsState(state).status;
export const selectPeopleDetails = (state) => selectPeopleDetailsState(state).peopleDetails;
export const selectPeopleCredits = (state) => selectPeopleDetailsState(state).peopleCredits;

export default peopleDetailsSlice.reducer;
