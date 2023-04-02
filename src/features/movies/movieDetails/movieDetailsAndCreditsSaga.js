import { call, put, select, takeLatest, delay, takeEvery } from "redux-saga/effects";
import { getMovie, getMovieCredits } from "../../getAPI";
import {
  fetchMovieDetailsAndCredits,
  loadMovieCreditsSuccess,
  loadMovieDetails,
  loadMovieDetailsError,
  loadMovieDetailsSuccess,
} from "./movieDetailsAndCreditsSlice";
import { selectMovieID } from "../movie/moviesSlice";
import { getIdLocalStorage, setIdLocalStorage } from "../../idLocalStorage";

function* fetchMovieDetailsAndCreditsHandler() {
  yield put(loadMovieDetails());
  yield delay(1_000);

  try {
    const movieID = yield call(getIdLocalStorage, "movieId");
    const movieDetails = yield call(getMovie, movieID);
    const movieCredits = yield call(getMovieCredits, movieID);
    yield put(loadMovieDetailsSuccess(movieDetails));
    yield put(loadMovieCreditsSuccess(movieCredits));
  } catch (error) {
    yield put(loadMovieDetailsError());
  }
}

function* saveIdInLocalStorage() {
    const movieId = yield select(selectMovieID);
    yield call(setIdLocalStorage, "movieId", movieId);
};

export function* movieDetailsAndCreditsSaga() {
  yield takeLatest(fetchMovieDetailsAndCredits.type, fetchMovieDetailsAndCreditsHandler);
  yield takeEvery("*", saveIdInLocalStorage);
}
