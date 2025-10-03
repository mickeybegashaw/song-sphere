import {
  Container,
  BackgroundMusicNote,
  Content,
  ErrorCode,
  Title,
  Message,
  HomeButton,
  IconWrapper,
  DecorativeCircle
} from './NotFound.style';




const NotFound = () => {
  return (
    <Container>
      <BackgroundMusicNote>♪</BackgroundMusicNote>
      <BackgroundMusicNote>♫</BackgroundMusicNote>
      <BackgroundMusicNote>🎵</BackgroundMusicNote>
      
      <DecorativeCircle />
      <DecorativeCircle />
      
      <Content>
        <ErrorCode>404</ErrorCode>
        <Title>Oops! Page Not Found</Title>
        <Message>
          The music you're looking for seems to have skipped this beat. 
          The page you requested couldn't be found in our melody library.
        </Message>
        
        <HomeButton to="/">
          <IconWrapper>🎵</IconWrapper>
          Back to Song Sphere
        </HomeButton>
      </Content>
    </Container>
  );
};

export default NotFound;