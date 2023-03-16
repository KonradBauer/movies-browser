import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movies/movie/moviesSaga";
import { peopleSaga } from "./features/peoples/people/peopleSaga";

export function* rootSaga() {
  yield all([
    moviesSaga(), 
    peopleSaga()
  ]);
}
