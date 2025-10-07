import { call, put, takeLatest, all } from "redux-saga/effects";
import API from "../api/axios";
import {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongRequest,
  addSongSuccess,
  updateSongRequest,
  updateSongSuccess,
  deleteSongRequest,
  deleteSongSuccess,
} from "../slices/songSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Song } from "../../src/types";
import type { SagaIterator } from "redux-saga";


function* fetchSongs():SagaIterator {
  try {
    const response = yield call(API.get, "/songs");
    yield put(fetchSongsSuccess(response.data.data));
  } catch (err: any) {
    yield put(fetchSongsFailure(err?.message || "Failed to fetch songs"));
  }
}

function* addSong(action: PayloadAction<Omit<Song, "_id">>):SagaIterator {
  try {
    const response = yield call(API.post, "/songs", action.payload);
    yield put(addSongSuccess(response.data.data));
  } catch (err: any) {
    yield put(fetchSongsFailure(err?.message || "Failed to add song"));
  }
}

function* updateSong(action: PayloadAction<Song>):SagaIterator {
  try {
    const { _id, ...rest } = action.payload;
    const response = yield call(API.put, `/songs/${_id}`, rest);
    yield put(updateSongSuccess(response.data.data));
  } catch (err: any) {
    yield put(fetchSongsFailure(err?.message || "Failed to update song"));
  }
}

function* deleteSong(action: PayloadAction<string>):SagaIterator {
  try {
    yield call(API.delete, `/songs/${action.payload}`);
    yield put(deleteSongSuccess(action.payload));
  } catch (err: any) {
    yield put(fetchSongsFailure(err?.message || "Failed to delete song"));
  }
}

/* watchers */

export default function* rootSaga():SagaIterator {
  yield all([
    takeLatest(fetchSongsRequest.type, fetchSongs),
    takeLatest(addSongRequest.type, addSong),
    takeLatest(updateSongRequest.type, updateSong),
    takeLatest(deleteSongRequest.type, deleteSong),
  ]);
}
