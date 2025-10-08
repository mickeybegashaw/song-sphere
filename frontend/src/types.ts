export interface Song {
  _id: string;
  title: string;
  artist: string;
  album?: string;
  genre?: string;
  createdAt?: string;
  updatedAt?: string;
}


export interface StatisticsData {
  total: {
    songs: number;
    artists: number;
    albums: number;
    genres: number;
  };
  songsPerGenre: Record<string, number>;
  songsPerArtist: Record<string, number>;
  albumsPerArtist: Record<string, number>;
  songsPerAlbum: Record<string, number>;
  topArtists: Record<string, number>;
}
