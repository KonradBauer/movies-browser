import { call, put, takeLatest } from "redux-saga/effects";
import { getPeople } from "../../getAPI";
import { fetchPeopleDetails, loadPeopleDetailsSuccess } from "./peopleDetailsSlice";

function* fetchPeopleDetailsHandler() {
  try {
    const peopleDetails = yield call(getPeople);
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
