import { call, put, debounce, select, delay } from "redux-saga/effects";
import { searchMovie } from "../getAPI";
import {
  loadSearchMoviesSuccess,
  fetchSearchMovies,
  selectSearchMoviesText,
  loadSearchMovies,
} from "./searchMoviesSlice";

function* fetchSearchMoviesHandler() {
  yield put(loadSearchMovies());
  yield delay(1000);

  try {
    const searchText = yield select(selectSearchMoviesText);
    const searchMovies = yield call(searchMovie, searchText);
    yield put(loadSearchMoviesSuccess(searchMovies));
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

export function* searchMoviesSaga() {
  yield debounce(300, fetchSearchMovies.type, fetchSearchMoviesHandler);
}
