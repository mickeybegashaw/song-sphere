import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectStats,
  selectStatsLoading,
  selectStatsError,
  selectGenreStats,
  selectArtistStats,
  selectTopArtists
} from '../../../store/select';
import { fetchStatsRequest } from '../../../store/slices/statSlice';
import {
  Container,
  Title,
  StatsGrid,
  StatCard,
  StatNumber,
  StatLabel,
  ChartGrid,
  ChartContainer,
  ChartTitle,
  ListContainer,
  ListItem,
  ListLabel,
  ListValue,
  SectionTitle,
  GenreBar,
  BarFill,
  BarLabel,
  LoadingContainer,
  ErrorContainer,
  EmptyState,
  RefreshButton,
} from './Statistics.style';

const Statistics = () => {
  const dispatch = useDispatch();
  const stats = useSelector(selectStats);
  const loading = useSelector(selectStatsLoading);
  const error = useSelector(selectStatsError);
  const genreStats = useSelector(selectGenreStats);
  const artistStats = useSelector(selectArtistStats);
  const topArtists = useSelector(selectTopArtists);
  useEffect(() => {
    dispatch(fetchStatsRequest());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchStatsRequest());
  };

  // Show loading state
  if (loading && !stats) {
    return (
      <Container>
        <Title>📊 Music Library Statistics</Title>
        <LoadingContainer>
          <div className="spinner"></div>
          <p>Loading your music statistics...</p>
        </LoadingContainer>
      </Container>
    );
  }

  // Show error state
  if (error && !stats) {
    return (
      <Container>
        <Title>📊 Music Library Statistics</Title>
        <ErrorContainer>
          <h3>😔 Unable to Load Statistics</h3>
          <p>{error}</p>
          <RefreshButton onClick={handleRefresh}>
            Try Again
          </RefreshButton>
        </ErrorContainer>
      </Container>
    );
  }

  // Show empty state when no stats or no songs
  if (!stats || stats.total.songs === 0) {
    return (
      <Container>
        <Title>📊 Music Library Statistics</Title>
        <EmptyState>
          <h3>🎵 No Songs Yet</h3>
          <p>Your music library is empty. Add some songs to see amazing statistics!</p>
          <p>Start by adding your favorite tracks to build your personal music collection.</p>
        </EmptyState>
      </Container>
    );
  }

  // Calculate additional statistics
  const artistsWithOneSong = artistStats.filter(artist => artist.count === 1).length;
  const averageSongsPerArtist = (stats.total.songs / stats.total.artists).toFixed(1);
  const averageAlbumsPerArtist = (stats.total.albums / stats.total.artists).toFixed(1);
  const mostCommonGenre = genreStats[0];
  const mostProductiveArtist = artistStats[0];

  return (
    <Container>
      <Title>📊 Your Music Library Statistics</Title>

      {/* Overview Stats */}
      <SectionTitle>📈 Overview</SectionTitle>
      <StatsGrid>
        <StatCard>
          <StatNumber>{stats.total.songs}</StatNumber>
          <StatLabel>Total Songs</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{stats.total.artists}</StatNumber>
          <StatLabel>Unique Artists</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{stats.total.albums}</StatNumber>
          <StatLabel>Albums</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{stats.total.genres}</StatNumber>
          <StatLabel>Genres</StatLabel>
        </StatCard>
      </StatsGrid>

      {/* Main Charts Grid */}
      <ChartGrid>
        {/* Genre Distribution */}
        <ChartContainer>
          <ChartTitle>🎵 Genre Distribution</ChartTitle>
          <ListContainer>
            {genreStats.map((stat) => (
              <GenreBar key={stat.genre}>
                <BarLabel>{stat.genre}</BarLabel>
                <BarFill percentage={stat.percentage}>
                  <span className="bar-text">
                    {stat.count} song{stat.count !== 1 ? 's' : ''} ({stat.percentage.toFixed(1)}%)
                  </span>
                </BarFill>
              </GenreBar>
            ))}
          </ListContainer>
        </ChartContainer>

        {/* Top Artists */}
        <ChartContainer>
          <ChartTitle>👨‍🎤 Top Artists</ChartTitle>
          <ListContainer>
            {topArtists.map((artist, index) => (
              <ListItem key={artist.artist}>
                <ListLabel>
                  <span className="rank">#{index + 1}</span> {artist.artist}
                </ListLabel>
                <ListValue>
                  {artist.count} song{artist.count !== 1 ? 's' : ''}
                </ListValue>
              </ListItem>
            ))}
          </ListContainer>
        </ChartContainer>
      </ChartGrid>

      {/* Artist Details */}
      <SectionTitle>🎤 Artist Details</SectionTitle>
      <ChartGrid>
        {artistStats.slice(0, 6).map((artist) => (
          <ChartContainer key={artist.artist}>
            <ChartTitle>{artist.artist}</ChartTitle>
            <ListContainer>
              <ListItem>
                <ListLabel>Total Songs</ListLabel>
                <ListValue>{artist.count}</ListValue>
              </ListItem>
              <ListItem>
                <ListLabel>Albums</ListLabel>
                <ListValue>{artist.albumCount}</ListValue>
              </ListItem>
              <ListItem>
                <ListLabel>Library Share</ListLabel>
                <ListValue>{((artist.count / stats.total.songs) * 100).toFixed(1)}%</ListValue>
              </ListItem>
              <ListItem>
                <ListLabel>Avg Songs/Album</ListLabel>
                <ListValue>{(artist.count / artist.albumCount).toFixed(1)}</ListValue>
              </ListItem>
            </ListContainer>
          </ChartContainer>
        ))}
      </ChartGrid>

      {/* Additional Statistics */}
      <SectionTitle>📊 Additional Insights</SectionTitle>
      <ChartGrid>
        {/* Most Productive Artist */}
        <ChartContainer>
          <ChartTitle>🏆 Most Productive Artist</ChartTitle>
          <ListContainer>
            {mostProductiveArtist && (
              <>
                <ListItem highlight>
                  <ListLabel>{mostProductiveArtist.artist}</ListLabel>
                  <ListValue>
                    {mostProductiveArtist.count} songs ({(mostProductiveArtist.count / stats.total.songs * 100).toFixed(1)}%)
                  </ListValue>
                </ListItem>
                <ListItem>
                  <ListLabel>Albums</ListLabel>
                  <ListValue>{mostProductiveArtist.albumCount}</ListValue>
                </ListItem>
                <ListItem>
                  <ListLabel>Songs per Album</ListLabel>
                  <ListValue>{(mostProductiveArtist.count / mostProductiveArtist.albumCount).toFixed(1)}</ListValue>
                </ListItem>
              </>
            )}
          </ListContainer>
        </ChartContainer>

        {/* Genre Insights */}
        <ChartContainer>
          <ChartTitle>🎭 Genre Insights</ChartTitle>
          <ListContainer>
            {mostCommonGenre && (
              <>
                <ListItem highlight>
                  <ListLabel>Most Common</ListLabel>
                  <ListValue>
                    {mostCommonGenre.genre} ({mostCommonGenre.percentage.toFixed(1)}%)
                  </ListValue>
                </ListItem>
                <ListItem>
                  <ListLabel>Genre Variety</ListLabel>
                  <ListValue>{stats.total.genres} genres</ListValue>
                </ListItem>
                <ListItem>
                  <ListLabel>Avg Songs/Genre</ListLabel>
                  <ListValue>{(stats.total.songs / stats.total.genres).toFixed(1)}</ListValue>
                </ListItem>
              </>
            )}
          </ListContainer>
        </ChartContainer>

        {/* Distribution Stats */}
        <ChartContainer>
          <ChartTitle>📈 Distribution</ChartTitle>
          <ListContainer>
            <ListItem>
              <ListLabel>Songs per Artist</ListLabel>
              <ListValue>{averageSongsPerArtist} avg</ListValue>
            </ListItem>
            <ListItem>
              <ListLabel>Albums per Artist</ListLabel>
              <ListValue>{averageAlbumsPerArtist} avg</ListValue>
            </ListItem>
            <ListItem>
              <ListLabel>Artists with 1 song</ListLabel>
              <ListValue>
                {artistsWithOneSong} ({((artistsWithOneSong / stats.total.artists) * 100).toFixed(1)}%)
              </ListValue>
            </ListItem>
            <ListItem>
              <ListLabel>Genre Coverage</ListLabel>
              <ListValue>
                {((genreStats.length / stats.total.genres) * 100).toFixed(1)}% displayed
              </ListValue>
            </ListItem>
          </ListContainer>
        </ChartContainer>
      </ChartGrid>

      {/* Album Statistics */}
      {Object.keys(stats.songsPerAlbum).length > 0 && (
        <>
          <SectionTitle>💿 Album Statistics</SectionTitle>
          <ChartGrid>
            {Object.entries(stats.songsPerAlbum)
              .sort(([, a], [, b]) => b - a)
              .slice(0, 4)
              .map(([album, count]) => (
                <ChartContainer key={album}>
                  <ChartTitle>{album}</ChartTitle>
                  <ListContainer>
                    <ListItem>
                      <ListLabel>Total Songs</ListLabel>
                      <ListValue>{count}</ListValue>
                    </ListItem>
                    <ListItem>
                      <ListLabel>Library Share</ListLabel>
                      <ListValue>{((count / stats.total.songs) * 100).toFixed(1)}%</ListValue>
                    </ListItem>
                    <ListItem>
                      <ListLabel>Album Artist</ListLabel>
                      <ListValue>
                        {artistStats.find(a => 
                          Object.keys(stats.albumsPerArtist).includes(a.artist) && 
                          stats.albumsPerArtist[a.artist] > 0
                        )?.artist || 'Various'}
                      </ListValue>
                    </ListItem>
                  </ListContainer>
                </ChartContainer>
              ))}
          </ChartGrid>
        </>
      )}
    </Container>
  );
};

export default Statistics;