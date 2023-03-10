import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/movie/moviesSlice";
import movieDetailsReducer from "./features/movies/movieDetails/movieDetailsSlice";
import peopleReducer from "./features/peoples/people/peopleSlice";
import peopleDetailsReducer from "./features/peoples/peopleDetails/peopleDetailsSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
    people: peopleReducer,
    peopleDetails: peopleDetailsReducer,
  },
});
