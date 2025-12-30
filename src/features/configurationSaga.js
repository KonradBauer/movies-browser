import { call, put, takeLatest } from "redux-saga/effects";
import { configuration } from "./getAPI";
import { fetchConfiguration, loadConfigurationSuccess } from "./configurationSlice";

function* fetchConfigurationHandler() {
  try {
    const config = yield call(configuration);
    yield put(loadConfigurationSuccess(config.images));
  } catch (error) {
    yield put(loadConfigurationSuccess({}));
  }
}

export function* configurationSaga() {
  yield takeLatest(fetchConfiguration.type, fetchConfigurationHandler);
}
