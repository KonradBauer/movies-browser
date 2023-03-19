import { all } from "redux-saga/effects";
import { genresSaga } from "./features/movies/genresSaga";
import { moviesSaga } from "./features/movies/movie/moviesSaga";
import { movieDetailsAndCreditsSaga } from "./features/movies/movieDetails/movieDetailsAndCreditsSaga";
import { peopleSaga } from "./features/peoples/people/peopleSaga";
import { configurationSaga } from "./features/configurationSaga";
import { peopleDetailsSaga } from "./features/peoples/peopleDetails/peopleDetailsSaga";

export function* rootSaga() {
  yield all([
    configurationSaga(),
    genresSaga(),
    moviesSaga(),
    movieDetailsAndCreditsSaga(),
    peopleSaga(),
    peopleDetailsSaga(),
  ]);
}
