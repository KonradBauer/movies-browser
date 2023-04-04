import { call, put, select, takeLatest, delay, takeEvery } from "redux-saga/effects";
import { getPeople, getPeopleCredits } from "../../getAPI";
import { selectPeopleID } from "../people/peopleSlice";
import {
  fetchPeopleDetails,
  loadPeopleCreditsSuccess,
  loadPeopleDetails,
  loadPeopleDetailsError,
  loadPeopleDetailsSuccess,
} from "./peopleDetailsSlice";
import { getLocalStorage, setLocalStorage } from "../../localStorage";

function* fetchPeopleDetailsHandler() {
  yield put(loadPeopleDetails());
  yield delay(1_000);

  try {
    const peopleID = yield call(getLocalStorage, "peopleId");
    const peopleDetails = yield call(getPeople, peopleID);
    const peopleCredits = yield call(getPeopleCredits, peopleID);
    yield put(loadPeopleDetailsSuccess(peopleDetails));
    yield put(loadPeopleCreditsSuccess(peopleCredits));
  } catch (error) {
    yield put(loadPeopleDetailsError());
  }
}

function* saveIdInLocalStorage() {
  const peopleId = yield select(selectPeopleID);
  yield call(setLocalStorage, "peopleId", peopleId);
};

export function* peopleDetailsSaga() {
  yield takeLatest(fetchPeopleDetails.type, fetchPeopleDetailsHandler);
  yield takeEvery("*", saveIdInLocalStorage);
}
