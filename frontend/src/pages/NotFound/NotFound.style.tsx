import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// anima
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const glow = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

export const BackgroundMusicNote = styled.div`
  position: absolute;
  font-size: 8rem;
  opacity: 0.1;
  animation: ${float} 6s ease-in-out infinite;
  
  &:nth-of-type(1) {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &:nth-of-type(2) {
    top: 20%;
    right: 15%;
    animation-delay: 1.5s;
  }
  
  &:nth-of-type(3) {
    bottom: 15%;
    left: 20%;
    animation-delay: 3s;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;
`;

export const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 900;
  margin: 0;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin: 1rem 0;
  font-weight: 600;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  opacity: 0.9;
`;

export const HomeButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const IconWrapper = styled.span`
  animation: ${glow} 2s ease-in-out infinite;
`;

export const DecorativeCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  
  &:nth-of-type(1) {
    width: 200px;
    height: 200px;
    top: -50px;
    right: -50px;
  }
  
  &:nth-of-type(2) {
    width: 150px;
    height: 150px;
    bottom: -30px;
    left: -30px;
  }
`;

