import { createSelector } from "reselect";
import type { RootState } from "../store/index";

const selectSongsState = (state: RootState) => state.songs;

export const selectAllSongs = (state: RootState) => state.songs.songs;
export const selectSongsLoading = (state: RootState) => selectSongsState(state).loading;
export const selectSongsError = (state: RootState) => selectSongsState(state).error;

export const selectStats = createSelector([selectAllSongs], (songs) => {
  const totalSongs = songs.length;
  const artists = new Set(songs.map(s => s.artist)).size;
  const albums = new Set(songs.map(s => s.album ?? "—")).size;
  const genres = new Set(songs.map(s => s.genre ?? "—")).size;

  const songsPerGenre = songs.reduce<Record<string, number>>((acc, s) => {
    const g = s.genre ?? "Unknown";
    acc[g] = (acc[g] || 0) + 1;
    return acc;
  }, {});

  const songsPerArtist = songs.reduce<Record<string, number>>((acc, s) => {
    acc[s.artist] = (acc[s.artist] || 0) + 1;
    return acc;
  }, {});

  return { totalSongs, artists, albums, genres, songsPerGenre, songsPerArtist };
});
