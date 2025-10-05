import React, { useEffect } from 'react';
import {
  HomeContainer,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  CTAButtons,
  PrimaryButton,
  SecondaryButton,
  StatsSection,
  StatsGrid,
  StatCard,
  StatIcon,
  StatNumber,
  StatLabel,
  FeaturesSection,
  SectionTitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  LoadingSpinner,
  HeroContent,
  HeroImage,
} from './Home.styles';

// import { useAppDispatch, useAppSelector } from '../../hooks';
// import { fetchStatistics } from '../../store/slices/statisticsSlice';


const Home: React.FC = () => {

  // const dispatch = useAppDispatch();
  // const { statistics, loading, error } = useAppSelector((state) => state.statistics);

  // useEffect(() => {
  //   dispatch(fetchStatistics());
  // }, [dispatch]);

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          {}

        <HeroTitle>Your ultimate music management platform.</HeroTitle>
        <HeroSubtitle>
          Organize, analyze, and discover insights about your music collection with beautiful visualizations and powerful tools.

        </HeroSubtitle>
        
        <CTAButtons>
          <PrimaryButton to="/songs">
            🎶 Explore Songs
          </PrimaryButton>
          <SecondaryButton to="/statistics">
            📊 View Statistics
          </SecondaryButton>
        </CTAButtons>
        </HeroContent>

        <HeroImage src="/HeroSectionImage.svg" alt="Music Illustration" />
      </HeroSection>

      {/* <StatsSection>
        <SectionTitle>Music Collection Overview</SectionTitle>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <LoadingSpinner />
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center', color: '#ff6b6b' }}>
            Error loading statistics: {error}
          </div>
        ) : (
          <StatsGrid>
            <StatCard>
              <StatIcon>🎵</StatIcon>
              <StatNumber>{statistics?.totalSongs || 0}</StatNumber>
              <StatLabel>Total Songs</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatIcon>👨‍🎤</StatIcon>
              <StatNumber>{statistics?.totalArtists || 0}</StatNumber>
              <StatLabel>Artists</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatIcon>💿</StatIcon>
              <StatNumber>{statistics?.totalAlbums || 0}</StatNumber>
              <StatLabel>Albums</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatIcon>🎼</StatIcon>
              <StatNumber>{statistics?.totalGenres || 0}</StatNumber>
              <StatLabel>Genres</StatLabel>
            </StatCard>
          </StatsGrid>
        )}
      </StatsSection> */}

      <FeaturesSection>
        <SectionTitle>Powerful Features</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>📝</FeatureIcon>
            <FeatureTitle>Manage Songs</FeatureTitle>
            <FeatureDescription>
              Add, edit, and organize your music collection with our intuitive interface. 
              Keep track of all your songs, artists, albums, and genres in one place.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>📊</FeatureIcon>
            <FeatureTitle>Advanced Analytics</FeatureTitle>
            <FeatureDescription>
              Gain insights into your music library with comprehensive statistics. 
              Discover your listening habits and music preferences through beautiful charts.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>🔍</FeatureIcon>
            <FeatureTitle>Smart Filtering</FeatureTitle>
            <FeatureDescription>
              Quickly find the music you love with powerful search and filter options. 
              Filter by genre, artist, album, and more to create perfect playlists.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </HomeContainer>
  );
};

export default Home;