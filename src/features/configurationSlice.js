import { createSlice } from "@reduxjs/toolkit";

const configurationSlice = createSlice({
  name: "configuration",
  initialState: {
    configuration: [],
    status: "initial",
  },
  reducers: {
    loadConfiguration: ({ status }) => {
      status = "loading";
    },
    loadConfigurationSuccess: (state, { payload: configuration }) => {
      state.configuration = configuration;
      state.status = "success";
    },
    loadConfigurationError: ({ status }) => {
      status = "error";
    },
    fetchConfiguration: () => {},
  },
});

export const {
  loadConfiguration,
  loadConfigurationSuccess,
  loadConfigurationError,
  fetchConfiguration,
} = configurationSlice.actions;

const selectConfigurationState = (state) => state.configuration;

export const selectPosterSizes = (state) => selectConfigurationState(state).configuration.poster_sizes;
export const selectBackdropSizes = (state) => selectConfigurationState(state).configuration.backdrop_sizes;
export const selectProfileSizes = (state) => selectConfigurationState(state).configuration.profile_sizes;

export default configurationSlice.reducer;
