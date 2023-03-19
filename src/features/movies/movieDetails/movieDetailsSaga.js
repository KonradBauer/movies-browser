import { call, put, select, takeLatest } from "redux-saga/effects";
import { getMovie } from "../../getAPI";
import { fetchMovieDetails, loadMovieDetailsSuccess } from "./movieDetailsSlice";
import { selectMovieID } from "../movie/moviesSlice";

function* fetchMovieDetailsHandler() {
  try {
    const movieID = yield select(selectMovieID)
    const movieDetails = yield call(getMovie, movieID)
    yield put(loadMovieDetailsSuccess(movieDetails));
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

export function* movieDetailsSaga() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}