import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/movie/moviesSlice";
import movieDetailsReducer from "./features/movies/movieDetails/movieDetailsSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
  },
});
