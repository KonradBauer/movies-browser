import { call, put, takeEvery } from "redux-saga/effects";
import { getPopularMovies } from "../../getAPI";
import { fetchMovies, getPages, loadMoviesSuccess } from "./moviesSlice";

function* fetchMoviesHandler() {
  try {
    const movie = yield call(getPopularMovies);
    yield put(loadMoviesSuccess(movie.results));
    yield put(getPages(movie.page))
  } catch(error) {
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
    console.log("Saga movies działa.");
    yield takeEvery(fetchMovies.type, fetchMoviesHandler);
}
