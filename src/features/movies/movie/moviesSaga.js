import { call, put, takeLatest, select } from "redux-saga/effects";
import { getPopularMovies } from "../../getAPI";
import { fetchMovies, loadMoviesSuccess, selectPages } from "./moviesSlice";

function* fetchMoviesHandler() {
  try {
    const page = yield select(selectPages);
    const movie = yield call(getPopularMovies, page);
    yield put(loadMoviesSuccess(movie.results));
  } catch (error) {
    if (error.response) {
      console.log("Error response:", error.response.data);
    } else if (error.request) {
      console.log("Error request:", error.request);
    } else {
      console.log("Error message:", error.message);
    }
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
