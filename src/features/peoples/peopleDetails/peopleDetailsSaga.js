import { call, put, select, takeLatest } from "redux-saga/effects";
import { getPeople } from "../../getAPI";
import { selectPeopleID } from "../people/peopleSlice";
import { fetchPeopleDetails, loadPeopleDetailsSuccess } from "./peopleDetailsSlice";

function* fetchPeopleDetailsHandler() {
  try {
    const peopleID = yield select(selectPeopleID);
    const peopleDetails = yield call(getPeople, peopleID);
    yield put(loadPeopleDetailsSuccess(peopleDetails));
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
