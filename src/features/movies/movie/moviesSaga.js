import { call, put, takeEvery } from "redux-saga/effects";
import { getMovie } from "../../getAPI";
import { loadMoviesSuccess } from "./moviesSlice";

function* fetchMoviesHandler() {
  try {
    const movies = yield call(getMovie);
    yield put(loadMoviesSuccess(movies));
  } catch(error) {
    if (error.response) {
      console.log("Error response:", error.response.data);
    } else if (error.request) {
      console.log("Error request:", error.request);
    } else {
      console.log("Error message:", error.message);
    }
  }
}

export function* moviesSaga() {
    console.log("Saga movies działa.");
    yield takeEvery(loadMoviesSuccess.type, fetchMoviesHandler);
}
