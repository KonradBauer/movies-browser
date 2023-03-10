import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
  name: "peopleDetails",
  initialState: {
    peopleDetails: null,
    status: "initial",
  },
  reducers: {
    loadPeopleDetails: () => ({
      peopleDetails: null,
      status: "loading",
    }),
    loadPeopleDetailsSuccess: (state, { payload: peopleDetails }) => ({
      peopleDetails,
      status: "success",
    }),
    loadPeopleDetailsError: () => ({ peopleDetails: null, status: "error" }),
  },
});

export const { loadPeopleDetails, loadPeopleDetailsSuccess, loadPeopleDetailsError } =
  peopleDetailsSlice.actions;

const selectPeopleDetailsState = (state) => state.peopleDetails;

export const selectPeopleDetailsStatus = (state) => selectPeopleDetailsState(state).status;
export const selectPeopleDetails = (state) => selectPeopleDetailsState(state).peopleDetails;

export default peopleDetailsSlice.reducer;
