import { call, put, takeLatest, select, delay, takeEvery } from "redux-saga/effects";
import { searchMovie } from "../getAPI";
import {
  loadSearchMoviesSuccess,
  fetchSearchMovies,
  selectSearchMoviesText,
  selectSearchMoviesPage,
  loadSearchMovies,
} from "./searchMoviesSlice";
import { getLocalStorage, setLocalStorage } from "../localStorage";

function* fetchSearchMoviesHandler() {
  yield put(loadSearchMovies());
  yield delay(1000);

  try {
    const searchText = yield call(getLocalStorage, "moviesSearch");
    const page = yield select(selectSearchMoviesPage);
    const searchMovies = yield call(searchMovie, page, searchText);
    yield put(loadSearchMoviesSuccess(searchMovies));
  } catch (error) {
    yield put(loadSearchMoviesSuccess({ results: [], total_pages: 0 }));
  }
}

function* saveMoviesSearchInLocalStorage() {
  const moviesSearch = yield select(selectSearchMoviesText);
  yield call(setLocalStorage, "moviesSearch", moviesSearch);
}

export function* searchMoviesSaga() {
  yield takeLatest(fetchSearchMovies.type, fetchSearchMoviesHandler);
  yield takeEvery("*", saveMoviesSearchInLocalStorage);
}
