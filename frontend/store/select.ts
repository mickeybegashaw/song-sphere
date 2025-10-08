import { createSelector } from "reselect";
import type { RootState } from "../store/index";

const selectSongsState = (state: RootState) => state.songs;
const selectStatisticsState = (state: RootState) => state.statistics;

// Songs selectors
export const selectAllSongs = (state: RootState) => state.songs.songs;
export const selectSongsLoading = (state: RootState) => selectSongsState(state).loading;
export const selectSongsError = (state: RootState) => selectSongsState(state).error;

// Statistics selectors
export const selectStats = (state: RootState) => selectStatisticsState(state).data;
export const selectStatsLoading = (state: RootState) => selectStatisticsState(state).loading;
export const selectStatsError = (state: RootState) => selectStatisticsState(state).error;

export const selectGenreStats = createSelector([selectStats], (stats) => {
  if (!stats?.songsPerGenre || !stats.total?.songs) return [];
  
  return Object.entries(stats.songsPerGenre)
    .map(([genre, count]) => ({
      genre,
      count,
      percentage: (count / stats.total.songs) * 100
    }))
    .sort((a, b) => b.count - a.count);
});

export const selectArtistStats = createSelector([selectStats], (stats) => {
  if (!stats?.songsPerArtist || !stats.albumsPerArtist) return [];
  
  return Object.entries(stats.songsPerArtist)
    .map(([artist, count]) => ({
      artist,
      count,
      albumCount: stats.albumsPerArtist[artist] || 0
    }))
    .sort((a, b) => b.count - a.count);
});

export const selectTopArtists = createSelector([selectArtistStats], (artists) => 
  artists.slice(0, 5)
);