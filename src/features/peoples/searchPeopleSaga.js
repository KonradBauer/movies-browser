import { call, put, select, takeLatest } from "redux-saga/effects";
import { searchPeople } from "../getAPI";
import { setLocalStorage } from "../localStorage";
import {
  changePeopleSearchText,
  fetchSearchPeople,
  loadSearchPeople,
  loadSearchPeopleError,
  loadSearchPeopleSuccess,
  selectPeopleSearchText,
  selectSearchPeoplePage,
} from "../peoples/searchPeopleSlice";

function* fetchSearchPeopleHandler() {
  const searchText = yield select(selectPeopleSearchText);

  if (!searchText || !searchText.trim()) {
    return;
  }

  yield put(loadSearchPeople());

  try {
    const page = yield select(selectSearchPeoplePage);
    const result = yield call(searchPeople, page, searchText);
    yield put(loadSearchPeopleSuccess(result));
  } catch (error) {
    yield put(loadSearchPeopleError());
  }
}

function* savePeopleSearchHandler({ payload: searchText }) {
  yield call(setLocalStorage, "peopleSearch", searchText);
}

export function* searchPeopleSaga() {
  yield takeLatest(fetchSearchPeople.type, fetchSearchPeopleHandler);
  yield takeLatest(changePeopleSearchText.type, savePeopleSearchHandler);
}
