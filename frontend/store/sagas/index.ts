import { all } from "redux-saga/effects";
import { watchSongs } from "./songSaga";
import { watchStatistics } from "./statSaga";

export default function* rootSaga() {
  yield all([
    watchSongs(),
    watchStatistics(),
  ]);
}