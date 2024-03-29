import { call, put, select, delay, takeEvery, takeLatest } from "redux-saga/effects";
import { searchPeople } from "../getAPI";
import {
  loadSearchPeopleSuccess,
  fetchSearchPeople,
  selectPeopleSearchText,
  loadSearchPeople,
  selectSearchPeoplePage,
} from "../peoples/searchPeopleSlice";
import { getLocalStorage, setLocalStorage } from "../localStorage";

function* fetchSearchPeopleHandler() {
  yield put(loadSearchPeople());
  yield delay(1000);

  try {
    const searchText = yield call(getLocalStorage, "peopleSearch");
    const page = yield select(selectSearchPeoplePage);
    const searchPeoples = yield call(searchPeople, page, searchText);
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

function* savePeopleSearchInLocalStorage() {
  const peopleSearch = yield select(selectPeopleSearchText);
  yield call(setLocalStorage, "peopleSearch", peopleSearch);
}

export function* searchPeopleSaga() {
  yield takeLatest(fetchSearchPeople.type, fetchSearchPeopleHandler);
  yield takeEvery("*", savePeopleSearchInLocalStorage);
}
