import { call, put, debounce, select } from "redux-saga/effects";
import { searchPeople } from "../getAPI";
import { loadSearchPeopleSuccess, fetchSearchPeople, selectSearchText } from "../peoples/searchPeopleSlice";

function* fetchSearchPeopleHandler() {
  try {
    const searchText = yield select(selectSearchText)
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