import { call, put, takeLatest } from "redux-saga/effects";
import { getGenres } from "../getAPI";
import { fetchGenres, loadGenresSuccess } from "./genresSilce";

function* fetchGenressHandler() {
  try {
    const genres = yield call(getGenres);
    yield put(loadGenresSuccess(genres.genres));
  } catch (error) {
    yield put(loadGenresSuccess([]));
  }
}

export function* genresSaga() {
  yield takeLatest(fetchGenres.type, fetchGenressHandler);
}
