import { call, put, takeLatest } from "redux-saga/effects";
import { getGenres } from "../getAPI";
import { fetchGenres, loadGenresSuccess } from "./genresSilce";

function* fetchGenressHandler() {
  try {
    const genres = yield call(getGenres);
    yield put(loadGenresSuccess(genres.genres));
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

export function* genresSaga() {
  yield takeLatest(fetchGenres.type, fetchGenressHandler);
}
