import { call, put, select, takeLatest, delay } from "redux-saga/effects";
import { getPeople, getPeopleCredits } from "../../getAPI";
import { selectPeopleID } from "../people/peopleSlice";
import {
  fetchPeopleDetails,
  loadPeopleCreditsSuccess,
  loadPeopleDetails,
  loadPeopleDetailsError,
  loadPeopleDetailsSuccess,
} from "./peopleDetailsSlice";

function* fetchPeopleDetailsHandler() {
  yield put(loadPeopleDetails());
  yield delay(1_000);

  try {
    const peopleID = yield select(selectPeopleID);
    const peopleDetails = yield call(getPeople, peopleID);
    const peopleCredits = yield call(getPeopleCredits, peopleID);
    yield put(loadPeopleDetailsSuccess(peopleDetails));
    yield put(loadPeopleCreditsSuccess(peopleCredits));
  } catch (error) {
    yield put(loadPeopleDetailsError());
  }
}

export function* peopleDetailsSaga() {
  yield takeLatest(fetchPeopleDetails.type, fetchPeopleDetailsHandler);
}
