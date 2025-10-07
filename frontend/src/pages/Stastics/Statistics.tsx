import { useSelector } from 'react-redux';
import { selectStats } from '../../../store/select';
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
  BarLabel
} from './Statistics.style';

const Statistics = () => {
  const stats = useSelector(selectStats);

  // Convert songsPerGenre to array and sort
  const genreStats = Object.entries(stats.songsPerGenre)
    .map(([genre, count]) => ({
      genre,
      count,
      percentage: (count / stats.totalSongs) * 100
    }))
    .sort((a, b) => b.count - a.count);

  // Convert songsPerArtist to array and sort
  const artistStats = Object.entries(stats.songsPerArtist)
    .map(([artist, count]) => ({
      artist,
      count
    }))
    .sort((a, b) => b.count - a.count);

  // Get top artists (most songs)
  const topArtists = artistStats.slice(0, 5);


  return (
    <Container>
      <Title>📊 Music Library Statistics</Title>

      {/* Overview Stats */}
      <StatsGrid>
        <StatCard>
          <StatNumber>{stats.totalSongs}</StatNumber>
          <StatLabel>Total Songs</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{stats.artists}</StatNumber>
          <StatLabel>Unique Artists</StatLabel>
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

      <ChartGrid>
        {/* Genre Distribution */}
        <ChartContainer>
          <ChartTitle>🎵 Genre Distribution</ChartTitle>
          <ListContainer>
            {genreStats.map((stat) => (
              <GenreBar key={stat.genre}>
                <BarLabel>{stat.genre}</BarLabel>
                <BarFill percentage={stat.percentage}>
                  <span>{stat.count} songs ({stat.percentage.toFixed(1)}%)</span>
                </BarFill>
              </GenreBar>
            ))}
          </ListContainer>
        </ChartContainer>

        {/* Top Artists */}
        <ChartContainer>
          <ChartTitle>👨‍🎤 Top Artists</ChartTitle>
          <ListContainer>
            {topArtists.map((artist) => (
              <ListItem key={artist.artist}>
                <ListLabel>{artist.artist}</ListLabel>
                <ListValue>
                  {artist.count} song{artist.count !== 1 ? 's' : ''}
                </ListValue>
              </ListItem>
            ))}
          </ListContainer>
        </ChartContainer>
      </ChartGrid>

      {/* Artist Statistics */}
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
                <ListLabel>Library Share</ListLabel>
                <ListValue>{((artist.count / stats.totalSongs) * 100).toFixed(1)}%</ListValue>
              </ListItem>
            </ListContainer>
          </ChartContainer>
        ))}
      </ChartGrid>

      {/* Additional Stats */}
      <SectionTitle>📈 Additional Statistics</SectionTitle>
      <ChartGrid>
        <ChartContainer>
          <ChartTitle>🏆 Most Productive Artist</ChartTitle>
          <ListContainer>
            {artistStats[0] && (
              <ListItem>
                <ListLabel>{artistStats[0].artist}</ListLabel>
                <ListValue>
                  {artistStats[0].count} songs ({(artistStats[0].count / stats.totalSongs * 100).toFixed(1)}% of library)
                </ListValue>
              </ListItem>
            )}
          </ListContainer>
        </ChartContainer>

        <ChartContainer>
          <ChartTitle>🎭 Most Common Genre</ChartTitle>
          <ListContainer>
            {genreStats[0] && (
              <ListItem>
                <ListLabel>{genreStats[0].genre}</ListLabel>
                <ListValue>
                  {genreStats[0].count} songs ({genreStats[0].percentage.toFixed(1)}%)
                </ListValue>
              </ListItem>
            )}
          </ListContainer>
        </ChartContainer>

        <ChartContainer>
          <ChartTitle>📊 Distribution</ChartTitle>
          <ListContainer>
            <ListItem>
              <ListLabel>Songs per Artist</ListLabel>
              <ListValue>{(stats.totalSongs / stats.artists).toFixed(1)} avg</ListValue>
            </ListItem>
            <ListItem>
              <ListLabel>Unique Genres</ListLabel>
              <ListValue>{stats.genres}</ListValue>
            </ListItem>
            <ListItem>
              <ListLabel>Artists with 1 song</ListLabel>
              <ListValue>
                {artistStats.filter(a => a.count === 1).length} artists
              </ListValue>
            </ListItem>
          </ListContainer>
        </ChartContainer>
      </ChartGrid>
    </Container>
  );
};

export default Statistics;