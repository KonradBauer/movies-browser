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
    yield put(loadSearchPeopleSuccess({ results: [], total_pages: 0 }));
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
