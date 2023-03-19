import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
  name: "peopleDetails",
  initialState: {
    peopleDetails: [],
    status: "initial",
  },
  reducers: {
    loadPeopleDetails: ({ status }) => {
      status = "loading";
    },
    loadPeopleDetailsSuccess: (state, { payload: peopleDetails }) => {
      state.peopleDetails = peopleDetails;
      state.status = "success";
    },
    loadPeopleDetailsError: ({ status }) => {
      status = "error";
    },
    fetchPeopleDetails: () => {},
  },
});

export const { loadPeopleDetails, loadPeopleDetailsSuccess, loadPeopleDetailsError, fetchPeopleDetails } =
  peopleDetailsSlice.actions;

const selectPeopleDetailsState = (state) => state.peopleDetails;

export const selectPeopleDetailsStatus = (state) => selectPeopleDetailsState(state).status;
export const selectPeopleDetails = (state) => selectPeopleDetailsState(state).peopleDetails;

export default peopleDetailsSlice.reducer;
