import { call, put, debounce, select, delay } from "redux-saga/effects";
import { searchPeople } from "../getAPI";
import { loadSearchPeopleSuccess, fetchSearchPeople, selectPeopleSearchText, loadSearchPeople } from "../peoples/searchPeopleSlice";

function* fetchSearchPeopleHandler() {
  yield put(loadSearchPeople());
  yield delay(1000);

  try {
    const searchText = yield select(selectPeopleSearchText)
    const searchPeoples = yield call(searchPeople, searchText);
    yield put(loadSearchPeopleSuccess(searchPeoples));
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

export function* searchPeopleSaga() {
  yield debounce(300, fetchSearchPeople.type, fetchSearchPeopleHandler);
}