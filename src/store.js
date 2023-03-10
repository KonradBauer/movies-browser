import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/movie/moviesSlice";

export const store = configureStore({
  reducer: {
    moviesReducer,
  },
});
