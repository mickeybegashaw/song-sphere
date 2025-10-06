import  { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Song } from "../../src/types";

interface SongsState {
  songs: Song[];
  loading: boolean;
  error: string | null;
}

const initialState: SongsState = {
  songs: [],
  loading: false,
  error: null,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    fetchSongsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    addSongRequest(state, _action: PayloadAction<Omit<Song, "_id">>) {
      state.loading = true;
      state.error = null;
    },
    updateSongRequest(state, _action: PayloadAction<Song>) {
      state.loading = true;
      state.error = null;
    },
    deleteSongRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },

    // Success / failure 
    fetchSongsSuccess(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
      state.loading = false;
      state.error = null;
    },
    addSongSuccess(state, action: PayloadAction<Song>) {
      state.songs.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    updateSongSuccess(state, action: PayloadAction<Song>) {
      const idx = state.songs.findIndex((s) => s._id === action.payload._id);
      if (idx >= 0) state.songs[idx] = action.payload;
      state.loading = false;
      state.error = null;
    },
    deleteSongSuccess(state, action: PayloadAction<string>) {
      state.songs = state.songs.filter((s) => s._id !== action.payload);
      state.loading = false;
      state.error = null;
    },

    fetchSongsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSongsRequest,
  addSongRequest,
  updateSongRequest,
  deleteSongRequest,
  fetchSongsSuccess,
  addSongSuccess,
  updateSongSuccess,
  deleteSongSuccess,
  fetchSongsFailure,
} = songsSlice.actions;

export default songsSlice.reducer;
