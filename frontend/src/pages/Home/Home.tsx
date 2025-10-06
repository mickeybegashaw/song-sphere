import {
  HomeContainer,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  CTAButtons,
  PrimaryButton,
  SecondaryButton,
  FeaturesSection,
  SectionTitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  HeroContent,
  HeroImage,
} from './Home.styles';



const Home: React.FC = () => {

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>

        <HeroTitle>Your ultimate music management platform. </HeroTitle>
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