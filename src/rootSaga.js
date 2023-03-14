import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movies/movie/moviesSaga";

export function* rootSaga() {
  yield all([moviesSaga()]);
}
