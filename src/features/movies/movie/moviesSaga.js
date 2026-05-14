import { call, put, takeLatest, select } from "redux-saga/effects";
import { getPopularMovies } from "../../getAPI";
import {
  fetchMovies,
  loadMovies,
  loadMoviesError,
  loadMoviesSuccess,
  selectMoviesPages,
} from "./moviesSlice";

function* fetchMoviesHandler() {
  yield put(loadMovies());

  try {
    const page = yield select(selectMoviesPages);
    const movie = yield call(getPopularMovies, page);
    yield put(loadMoviesSuccess(movie.results));
  } catch (error) {
    yield put(loadMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
