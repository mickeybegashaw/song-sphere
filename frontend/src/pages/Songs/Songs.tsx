import { useAppSelector, useAppDispatch } from "../../../store/hooks/hooks";
import { selectAllSongs, selectStats, selectSongsLoading, selectSongsError } from "../../../store/select";
import { fetchSongsRequest } from "../../../store/slices/songSlice";
import { useEffect, useState } from "react";
import AddMusicModal from "../../components/modals/AddSongModal/AddSongModal";

import {
  Container,
  Header,
  Title,
  StatsGrid,
  StatCard,
  StatNumber,
  StatLabel,
  FiltersContainer,
  SearchInput,
  FilterGroup,
  FilterSelect,
  ResultsSummary,
  ClearFilters,
  SongList,
  Grid,
  SongCard,
  SongHeader,
  SongTitle,
  AlbumBadge,
  SongArtist,
  SongMeta,
  GenreTag,
  EmptyState,
  EmptyText,
  EmptySubtext,
  LoadingSpinner,
  ErrorMessage,
  HeaderActions,
  AddButton,
  PlusIcon

} from "./Songs.style";
const Songs = () => {
  const dispatch = useAppDispatch();
  const songs = useAppSelector(selectAllSongs);
  const stats = useAppSelector(selectStats);
  const loading = useAppSelector(selectSongsLoading);
  const error = useAppSelector(selectSongsError);
  
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [selectedArtist, setSelectedArtist] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");
const [isAddModalOpen, setIsAddModalOpen] = useState(false);


  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  // Filter songs based on selections
  const filteredSongs = songs.filter(song => {
    const matchesGenre = selectedGenre === "All" || song.genre === selectedGenre;
    const matchesArtist = selectedArtist === "All" || song.artist === selectedArtist;
    const matchesSearch = song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         song.artist.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesGenre && matchesArtist && matchesSearch;
  });

  // Get unique genres and artists for dropdowns
  const uniqueGenres = ["All", ...new Set(songs.map(song => song.genre).filter(Boolean))];
  const uniqueArtists = ["All", ...new Set(songs.map(song => song.artist))];

  if (loading) {
    return (
      <Container>
        <LoadingSpinner>🎵 Loading your songs...</LoadingSpinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage> Error loading songs: {error}</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>🎵 Your Music Library</Title>
         <HeaderActions>
          <AddButton onClick={() => setIsAddModalOpen(true)}>
            <PlusIcon>+</PlusIcon>
            Add Song
          </AddButton>
        </HeaderActions>
      </Header>

      {/* Stats Overview */}
      <StatsGrid>
        <StatCard>
          <StatNumber>{stats.totalSongs}</StatNumber>
          <StatLabel>Total Songs</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{stats.artists}</StatNumber>
          <StatLabel>Artists</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{stats.albums}</StatNumber>
          <StatLabel>Albums</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{stats.genres}</StatNumber>
          <StatLabel>Genres</StatLabel>
        </StatCard>
      </StatsGrid>

      {/* Filters and Search */}
      <FiltersContainer>
        <SearchInput
          type="text"
          placeholder="Search songs or artists..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <FilterGroup>
          <FilterSelect 
            value={selectedGenre} 
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {uniqueGenres.map(genre => (
              <option key={genre} value={genre}>
                {genre || "No Genre"} {genre !== "All" && `(${stats.songsPerGenre[genre] || 0})`}
              </option>
            ))}
          </FilterSelect>

          <FilterSelect 
            value={selectedArtist} 
            onChange={(e) => setSelectedArtist(e.target.value)}
          >
            {uniqueArtists.map(artist => (
              <option key={artist} value={artist}>
                {artist} {artist !== "All" && `(${stats.songsPerArtist[artist] || 0})`}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>
      </FiltersContainer>

      {/* Results Summary */}
      <ResultsSummary>
        Showing {filteredSongs.length} of {songs.length} songs
        {(selectedGenre !== "All" || selectedArtist !== "All" || searchTerm) && (
          <ClearFilters onClick={() => {
            setSelectedGenre("All");
            setSelectedArtist("All");
            setSearchTerm("");
          }}>
            Clear filters
          </ClearFilters>
        )}
      </ResultsSummary>

      {/* Song List */}
      <SongList>
        {filteredSongs.length === 0 ? (
          <EmptyState>
            <EmptyText>No songs found</EmptyText>
            <EmptySubtext>
              {songs.length === 0 
                ? "Add your first track to get started!" 
                : "Try adjusting your filters or search term"}
            </EmptySubtext>
          </EmptyState>
        ) : (
          <Grid>
            {filteredSongs.map((song) => (
              <SongCard key={song._id}>
                <SongHeader>
                  <SongTitle>{song.title}</SongTitle>
                  {song.album && <AlbumBadge>{song.album}</AlbumBadge>}
                </SongHeader>
                <SongArtist>{song.artist}</SongArtist>
                <SongMeta>
                  {song.genre && <GenreTag>{song.genre}</GenreTag>}
                </SongMeta>
              </SongCard>
            ))}
          </Grid>
        )}
      </SongList>

       <AddMusicModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </Container>
  );
};

export default Songs;
