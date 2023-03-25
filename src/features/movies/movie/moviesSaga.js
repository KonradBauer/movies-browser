import { call, put, takeLatest, select } from "redux-saga/effects";
import { getPopularMovies } from "../../getAPI";
import { fetchMovies, loadMoviesError, loadMoviesSuccess, selectPages } from "./moviesSlice";

function* fetchMoviesHandler() {
  try {
    const page = yield select(selectPages);
    const movie = yield call(getPopularMovies, page);
    yield put(loadMoviesSuccess(movie.results));
  } catch (error) {
    yield put(loadMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
