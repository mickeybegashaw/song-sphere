import {
  LoginContainer,
  LoginCard,
  BackgroundMusicNote,
  LogoContainer,
  LogoImage,
  Title,
  Subtitle,
  Divider,
  FeaturesList,
  FeatureItem,
  FooterText
} from './Login.style.js'; 
import GoogleSignInBtn from '../../components/auth/GoogleBtn.js';


const Login = () => {
 

  return (
    <LoginContainer>
      <BackgroundMusicNote>🎵</BackgroundMusicNote>
      <BackgroundMusicNote>🎶</BackgroundMusicNote>
      <BackgroundMusicNote>🎼</BackgroundMusicNote>
      <BackgroundMusicNote>♪</BackgroundMusicNote>

      <LoginCard>
        <LogoContainer>
          <LogoImage 
            src="/songsphere.png" 
            alt="Song Sphere Logo" 
          />
          <Title>Song Sphere</Title>
          <Subtitle>
            Sign in to manage your music collection and discover insights
          </Subtitle>
        </LogoContainer>

        <Divider>
          <span>Continue with</span>
        </Divider>

        {/* Google Sign In Button */}
        <GoogleSignInBtn />

        <FeaturesList>
          <FeatureItem>Manage your song library</FeatureItem>
          <FeatureItem>View detailed statistics</FeatureItem>
          <FeatureItem>Discover music insights</FeatureItem>
          <FeatureItem>Organize by genres and artists</FeatureItem>
        </FeaturesList>

        <FooterText>
          By signing in, you agree to our Terms of Service and Privacy Policy.
          Your data is secure and we only access basic profile information.
        </FooterText>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;