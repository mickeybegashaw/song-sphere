import { call, put, takeEvery } from "redux-saga/effects";
import { fetchStatsRequest, fetchStatsSuccess, fetchStatsFailure } from "../slices/statSlice"
import api from "../../store/api/axios";
import type { SagaIterator } from "redux-saga";

function* fetchStatsSaga():SagaIterator {
  try {
    const response = yield call(api.get, "/stats");
    if (response.data.success) {
      yield put(fetchStatsSuccess(response.data.data));
    } else {
      yield put(fetchStatsFailure(response.data.message || "Failed to fetch statistics"));
    }
  } catch (error: any) {
    if (error.response?.status === 401) {
      yield put(fetchStatsFailure("Please log in to view statistics"));
    } else {
      yield put(fetchStatsFailure(error.response?.data?.message || "Failed to fetch statistics"));
    }
  }
}

export function* watchStatistics() {
  yield takeEvery(fetchStatsRequest.type, fetchStatsSaga);
}