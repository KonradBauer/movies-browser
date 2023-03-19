import { all } from "redux-saga/effects";
import { genresSaga } from "./features/movies/genresSaga";
import { moviesSaga } from "./features/movies/movie/moviesSaga";
import { movieDetailsSaga } from "./features/movies/movieDetails/movieDetailsSaga";
import { peopleSaga } from "./features/peoples/people/peopleSaga";
import { configurationSaga } from "./features/configurationSaga";

export function* rootSaga() {
  yield all([
    configurationSaga(),
    genresSaga(),
    moviesSaga(),
    movieDetailsSaga(),
    peopleSaga(),
  ]);
}
