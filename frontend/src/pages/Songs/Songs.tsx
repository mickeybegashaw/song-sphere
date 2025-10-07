import { useAppSelector, useAppDispatch } from "../../../store/hooks/hooks";
import {
  selectAllSongs,
  selectStats,
  selectSongsLoading,
  selectSongsError,
} from "../../../store/select";
import {
  deleteSongRequest,
  fetchSongsRequest,
} from "../../../store/slices/songSlice";
import { useEffect, useState } from "react";
import AddMusicModal from "../../components/modals/AddSongModal/AddSongModal";
import {
  MdHeadset,
  MdMusicNote,
  MdAlbum,
  MdDelete,
  MdEdit,
  MdMoreVert,
} from "react-icons/md";
import { FaGuitar, FaMicrophoneAlt } from "react-icons/fa";
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
  PlusIcon,
  ArtistIcon,
  MusicIcon,
  SongTitleWrapper,
  MusicNoteIcon,
  PlayIndicator,
  MenuItem,
  DropdownMenu,
  MenuButton,
} from "./Songs.style";
import EditSongModal from "../../components/modals/EditSongModal/EditSongModal";
import type { Song } from "../../types";
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
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
   const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  const handleEditSong = (song: Song) => {
    setSelectedSong(song);
    setEditModalOpen(true);
    setActiveMenu(null);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedSong(null);
  };


  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  // Filter songs based on selections
  const filteredSongs = songs.filter((song) => {
    const matchesGenre =
      selectedGenre === "All" || song.genre === selectedGenre;
    const matchesArtist =
      selectedArtist === "All" || song.artist === selectedArtist;

    const title = song.title?.toLowerCase() || "";
    const artist = song.artist?.toLowerCase() || "";
    const matchesSearch =
      title.includes(searchTerm.toLowerCase()) ||
      artist.includes(searchTerm.toLowerCase());

    return matchesGenre && matchesArtist && matchesSearch;
  });

  const uniqueArtists = ["All", ...new Set(songs.map((song) => song.artist))];

  const handleDeleteSong = (songId: string) => {
    if (window.confirm("Are you sure you want to delete this song?")) {
      dispatch(deleteSongRequest(songId));
    }
  };
  

  const toggleMenu = (songId: string) => {
    setActiveMenu(activeMenu === songId ? null : songId);
  };
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
    <Container onClick={() => setActiveMenu(null)}>
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
            value={selectedArtist}
            onChange={(e) => setSelectedArtist(e.target.value)}
          >
            {uniqueArtists.map((artist) => (
              <option key={artist} value={artist}>
                {artist}{" "}
                {artist !== "All" && `(${stats.songsPerArtist?.[artist] ?? 0})`}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>
      </FiltersContainer>

      {/* Results Summary */}
      <ResultsSummary>
        Showing {filteredSongs.length} of {songs.length} songs
        {(selectedGenre !== "All" ||
          selectedArtist !== "All" ||
          searchTerm) && (
          <ClearFilters
            onClick={() => {
              setSelectedGenre("All");
              setSelectedArtist("All");
              setSearchTerm("");
            }}
          >
            Clear filters
          </ClearFilters>
        )}
      </ResultsSummary>

      {/* Song List */}
      <SongList>
        {filteredSongs.length === 0 ? (
          <EmptyState>
            <MusicIcon>
              <MdHeadset size={48} />
            </MusicIcon>
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
              <SongCard onClick={() => setActiveMenu(null)} key={song._id}>
                <MenuButton
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu(song._id!);
                  }}
                  type="button"
                  title="Actions"
                >
                  <MdMoreVert size={20} />
                </MenuButton>

                {/* Dropdown Menu */}
                {activeMenu === song._id && (
                  <DropdownMenu onClick={(e) => e.stopPropagation()}>
                    <MenuItem
                      onClick={() => handleEditSong(song)}
                      className="edit"
                    >
                      <MdEdit size={16} />
                      Edit Song
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleDeleteSong(song._id!)}
                      className="delete"
                    >
                      <MdDelete size={16} />
                      Delete Song
                    </MenuItem>
                  </DropdownMenu>
                )}

                <SongHeader>
                  <SongTitleWrapper>
                    <MusicNoteIcon>
                      <MdMusicNote size={16} />
                    </MusicNoteIcon>
                    <SongTitle>{song.title}</SongTitle>
                  </SongTitleWrapper>
                  {song.album && (
                    <AlbumBadge>
                      <MdAlbum size={12} />
                      {song.album}
                    </AlbumBadge>
                  )}
                </SongHeader>

                <SongArtist>
                  <ArtistIcon>
                    <FaMicrophoneAlt size={12} />
                  </ArtistIcon>
                  {song.artist}
                </SongArtist>

                <SongMeta>
                  {song.genre && (
                    <GenreTag>
                      <FaGuitar size={10} />
                      {song.genre}
                    </GenreTag>
                  )}
                </SongMeta>

                <PlayIndicator>
                  <MdHeadset size={18} />
                </PlayIndicator>
              </SongCard>
            ))}
          </Grid>
        )}
      </SongList>
      <AddMusicModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />

      <EditSongModal 
    isOpen={editModalOpen}
    onClose={handleCloseEditModal}
    song={selectedSong}
  />
    </Container>
  );
};

export default Songs;
