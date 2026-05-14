import { call, put, select, takeLatest } from "redux-saga/effects";
import { getMovie, getMovieCredits } from "../../getAPI";
import {
  fetchMovieDetailsAndCredits,
  loadMovieCreditsSuccess,
  loadMovieDetails,
  loadMovieDetailsError,
  loadMovieDetailsSuccess,
} from "./movieDetailsAndCreditsSlice";
import { selectMovieID } from "../movie/moviesSlice";

function* fetchMovieDetailsAndCreditsHandler() {
  yield put(loadMovieDetails());

  try {
    const movieID = yield select(selectMovieID);
    const movieDetails = yield call(getMovie, movieID);
    const movieCredits = yield call(getMovieCredits, movieID);
    yield put(loadMovieDetailsSuccess(movieDetails));
    yield put(loadMovieCreditsSuccess(movieCredits));
  } catch (error) {
    yield put(loadMovieDetailsError());
  }
}

export function* movieDetailsAndCreditsSaga() {
  yield takeLatest(fetchMovieDetailsAndCredits.type, fetchMovieDetailsAndCreditsHandler);
}
