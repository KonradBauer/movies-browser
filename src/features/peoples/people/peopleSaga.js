import { call, put, select, takeLatest } from "redux-saga/effects";
import { getPopularPeople } from "../../getAPI";
import { selectPages } from "../../movies/movie/moviesSlice";
import { fetchPeople, loadPeopleError, loadPeopleSuccess } from "./peopleSlice";

function* fetchPeopleHandler() {
  try {
    const page = yield select(selectPages);
    const person = yield call(getPopularPeople, page);
    yield put(loadPeopleSuccess(person.results));
  } catch (error) {
    yield put(loadPeopleError());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
