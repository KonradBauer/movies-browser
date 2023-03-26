import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import genresReducer from "./features/movies/genresSilce";
import moviesReducer from "./features/movies/movie/moviesSlice";
import movieDetailsAndCreditsReducer from "./features/movies/movieDetails/movieDetailsAndCreditsSlice";
import peopleReducer from "./features/peoples/people/peopleSlice";
import peopleDetailsReducer from "./features/peoples/peopleDetails/peopleDetailsSlice";
import configurationReducer from "./features/configurationSlice";
import searchMoviesReducer from "./features/movies/searchMoviesSlice";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    configuration: configurationReducer,
    genres: genresReducer,
    movies: moviesReducer,
    movieDetailsAndCredits: movieDetailsAndCreditsReducer,
    people: peopleReducer,
    peopleDetails: peopleDetailsReducer,
    searchMovies: searchMoviesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);