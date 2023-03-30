import { call, put, debounce, select } from "redux-saga/effects";
import { searchMovie } from "../getAPI";
import { loadSearchMoviesSuccess, fetchSearchMovies, selectSearchText } from "./searchMoviesSlice";

function* fetchSearchMoviesHandler() {
  try {
    const searchText = yield select(selectSearchText)
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
