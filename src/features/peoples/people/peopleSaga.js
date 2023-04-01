import { call, put, select, takeLatest, delay } from "redux-saga/effects";
import { getPopularPeople } from "../../getAPI";
import { selectPeoplePages } from "./peopleSlice";
import { fetchPeople, loadPeople, loadPeopleError, loadPeopleSuccess } from "./peopleSlice";

function* fetchPeopleHandler() {
  yield put(loadPeople());
  yield delay(1_000);

  try {
    const page = yield select(selectPeoplePages);
    const person = yield call(getPopularPeople, page);
    yield put(loadPeopleSuccess(person.results));
  } catch (error) {
    yield put(loadPeopleError());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
