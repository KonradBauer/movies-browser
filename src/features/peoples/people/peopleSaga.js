import { call, put, takeLatest } from "redux-saga/effects";
import { getPopularPeople } from "../../getAPI";
import { fetchPeople, loadPeopleSuccess } from "./peopleSlice";

function* fetchPeopleHandler() {
  try {
    const person = yield call(getPopularPeople);
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
