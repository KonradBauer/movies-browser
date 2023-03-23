import { call, put, select, takeLatest, delay } from "redux-saga/effects";
import { getPeople, getPeopleCredits } from "../../getAPI";
import { selectPeopleID } from "../people/peopleSlice";
import {
  fetchPeopleDetails,
  loadPeopleCreditsSuccess,
  loadPeopleDetails,
  loadPeopleDetailsSuccess,
} from "./peopleDetailsSlice";

function* fetchPeopleDetailsHandler() {
  yield put(loadPeopleDetails());
  yield delay(1500);

  try {
    const peopleID = yield select(selectPeopleID);
    const peopleDetails = yield call(getPeople, peopleID);
    const peopleCredits = yield call(getPeopleCredits, peopleID);
    yield put(loadPeopleDetailsSuccess(peopleDetails));
    yield put(loadPeopleCreditsSuccess(peopleCredits));
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

export function* peopleDetailsSaga() {
  yield takeLatest(fetchPeopleDetails.type, fetchPeopleDetailsHandler);
}
