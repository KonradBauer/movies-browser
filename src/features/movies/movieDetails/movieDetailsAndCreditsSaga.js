import { call, put, select, takeLatest } from "redux-saga/effects";
import { getMovie, getMovieCredits } from "../../getAPI";
import {
  fetchMovieDetailsAndCredits,
  loadMovieCreditsSuccess,
  loadMovieDetailsSuccess,
} from "./movieDetailsAndCreditsSlice";
import { selectMovieID } from "../movie/moviesSlice";

function* fetchMovieDetailsAndCreditsHandler() {
  try {
    const movieID = yield select(selectMovieID);
    const movieDetails = yield call(getMovie, movieID);
    const movieCredits = yield call(getMovieCredits, movieID);
    yield put(loadMovieDetailsSuccess(movieDetails));
    yield put(loadMovieCreditsSuccess(movieCredits));
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

export function* movieDetailsAndCreditsSaga() {
  yield takeLatest(fetchMovieDetailsAndCredits.type, fetchMovieDetailsAndCreditsHandler);
}
