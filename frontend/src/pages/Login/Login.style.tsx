import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
// Animations
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

export const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
export const LoginContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(-45deg,  #667eea 0%, #764ba2 100%);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

export const BackgroundMusicNote = styled.div`
  position: absolute;
  font-size: 6rem;
  opacity: 0.1;
  animation: ${float} 6s ease-in-out infinite;
  color: white;
  
  &:nth-of-type(1) {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &:nth-of-type(2) {
    top: 20%;
    right: 15%;
    animation-delay: 2s;
  }
  
  &:nth-of-type(3) {
    bottom: 15%;
    left: 20%;
    animation-delay: 4s;
  }
  
  &:nth-of-type(4) {
    bottom: 25%;
    right: 10%;
    animation-delay: 6s;
  }
`;

export const LoginCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3rem;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${fadeInUp} 0.8s ease-out;
  position: relative;
  z-index: 2;

  @media (max-width: 480px) {
    padding: 2rem;
    margin: 1rem;
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 2.1rem;
`;

export const LogoImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  margin-bottom: 1rem;
  animation: ${float} 3s ease-in-out infinite;
`;

export const Title = styled.h1`
  font-size: 2.1rem;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea, #764ba2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  color: #6b7280;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.1;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  color: #767d89ff;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e5e7eb;
  }

  span {
    padding: 0 1rem;
    font-size: 0.9rem;
  }
`;

export const FeaturesList = styled.ul`
  margin-top: 2rem;
  padding: 0;
  list-style: none;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: #6b7280;
  font-size: 0.95rem;

  &::before {
    content: '✓';
    color: #10b981;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

export const FooterText = styled.p`
  text-align: center;
  margin-top: 2rem;
  color: #9ca3af;
  font-size: 0.9rem;
  line-height: 1.5;
`;
