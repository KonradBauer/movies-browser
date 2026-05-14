import { call, put, select, takeLatest } from "redux-saga/effects";
import { searchMovie } from "../getAPI";
import { setLocalStorage } from "../localStorage";
import {
  changeMoviesSearchText,
  fetchSearchMovies,
  loadSearchMovies,
  loadSearchMoviesError,
  loadSearchMoviesSuccess,
  selectSearchMoviesPage,
  selectSearchMoviesText,
} from "./searchMoviesSlice";

function* fetchSearchMoviesHandler() {
  const searchText = yield select(selectSearchMoviesText);

  if (!searchText || !searchText.trim()) {
    return;
  }

  yield put(loadSearchMovies());

  try {
    const page = yield select(selectSearchMoviesPage);
    const result = yield call(searchMovie, page, searchText);
    yield put(loadSearchMoviesSuccess(result));
  } catch (error) {
    yield put(loadSearchMoviesError());
  }
}

function* saveMoviesSearchHandler({ payload: searchText }) {
  yield call(setLocalStorage, "moviesSearch", searchText);
}

export function* searchMoviesSaga() {
  yield takeLatest(fetchSearchMovies.type, fetchSearchMoviesHandler);
  yield takeLatest(changeMoviesSearchText.type, saveMoviesSearchHandler);
}
