import { fromNodeHeaders } from "better-auth/node";
import Song from "../models/songs.js";
import { auth } from "../Auth/auth.js";

const StatsticsController = async (req, res) => {
  try {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    if (!session || !session.user) {
      return res.status(401).json({ 
        success: false, 
        message: "Unauthorized - Please log in" 
      });
    }

    const userId = session.session.userId;

    // Fetch songs for specific user
    const songs = await Song.find({ userId });
    
    if (songs.length === 0) {
      return res.json({
        success: true,
        data: {
          total: {
            songs: 0,
            artists: 0,
            albums: 0,
            genres: 0,
          },
          songsPerGenre: {},
          songsPerArtist: {},
          albumsPerArtist: {},
          songsPerAlbum: {},
          topArtists: {},
        }
      });
    }

    const totalSongs = songs.length;
    
    //unique values
    const artists = [...new Set(songs.map(song => song.artist))];
    const albums = [...new Set(songs.map(song => song.album))];
    const genres = [...new Set(songs.map(song => song.genre))];

    // Songs/genre
    const songsPerGenre = songs.reduce((acc, song) => {
      const genre = song.genre || 'Unknown';
      acc[genre] = (acc[genre] || 0) + 1;
      return acc;
    }, {});

    // Songs/artist
    const songsPerArtist = songs.reduce((acc, song) => {
      acc[song.artist] = (acc[song.artist] || 0) + 1;
      return acc;
    }, {});

    // alb/artist
    const albumsPerArtist = songs.reduce((acc, song) => {
      if (!acc[song.artist]) {
        acc[song.artist] = new Set();
      }
      acc[song.artist].add(song.album);
      return acc;
    }, {});

    // alb/artist count
    const albumsPerArtistCount = Object.keys(albumsPerArtist).reduce((acc, artist) => {
      acc[artist] = albumsPerArtist[artist].size;
      return acc;
    }, {});

    // Songs/album
    const songsPerAlbum = songs.reduce((acc, song) => {
      const album = song.album || 'Unknown';
      acc[album] = (acc[album] || 0) + 1;
      return acc;
    }, {});

    // Top artists
    const topArtists = Object.entries(songsPerArtist)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .reduce((acc, [artist, count]) => {
        acc[artist] = count;
        return acc;
      }, {});

    res.json({
      success: true,
      data: {
        total: {
          songs: totalSongs,
          artists: artists.length,
          albums: albums.length,
          genres: genres.length,
        },
        songsPerGenre,
        songsPerArtist,
        albumsPerArtist: albumsPerArtistCount,
        songsPerAlbum,
        topArtists,
      }
    });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

export default StatsticsController;