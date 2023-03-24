import { call, put, select, takeLatest } from "redux-saga/effects";
import { getPopularPeople } from "../../getAPI";
import { selectPages } from "../../movies/movie/moviesSlice";
import { fetchPeople, loadPeopleSuccess } from "./peopleSlice";

function* fetchPeopleHandler() {
  try {
    const page = yield select(selectPages);
    const person = yield call(getPopularPeople, page);
    yield put(loadPeopleSuccess(person.results));
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

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
