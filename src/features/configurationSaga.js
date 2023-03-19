import { call, put, takeLatest } from "redux-saga/effects";
import { configuration } from "./getAPI";
import { fetchConfiguration, loadConfigurationSuccess } from "./configurationSlice";

function* fetchConfigurationHandler() {
  try {
    const config = yield call(configuration);
    yield put(loadConfigurationSuccess(config.images));
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

export function* configurationSaga() {
  yield takeLatest(fetchConfiguration.type, fetchConfigurationHandler);
}
