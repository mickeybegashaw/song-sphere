import { Link } from 'react-router-dom';
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

export const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
`;

export const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
  50% { box-shadow: 0 0 30px rgba(255, 255, 255, 0.2); }
`;

// Styles
export const HomeContainer = styled.div`
 min-height: calc(100vh - 70px); 
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 4rem;
  margin-top: -70px; /* Counteract the header space */
  padding-top: calc(70px + 2rem); /* Add header height to padding */
`;

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  min-height: 80vh;
  max-width: 1300px;
  margin: auto;
  padding: 0 2rem;
  gap: 5rem;
  position: relative;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    min-height: 100vh;
    padding-top: 0;
  }
`;

export const HeroContent = styled.div`
  animation: ${slideInLeft} 0.8s ease-out;
  padding-top: 2rem;
 

  @media (max-width: 968px) {
    order: 2;
    padding-top: 0;
  }
`;

export const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideInRight} 0.8s ease-out;

  @media (max-width: 968px) {
    order: 1;
    padding-top: 2rem;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 20px;
  animation: ${float} 4s ease-in-out infinite, ${glow} 3s ease-in-out infinite;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.3rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #fff, #f0f0f0, #e0e0e0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.95;
  line-height: 1.7;
  max-width: 90%;

  @media (max-width: 968px) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PrimaryButton = styled(Link)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  color: white;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.4s ease;
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px) scale(1.01);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
`;

export const SecondaryButton = styled(Link)`
  background: transparent;
  color: white;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transition: width 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.7);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    
    &::before {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
`;

export const StatsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    border-radius: 20px;
    margin-top: 2rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 800;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const StatCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.4s ease;
  animation: ${fadeInUp} 0.8s ease-out;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

export const StatIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  animation: ${float} 3s ease-in-out infinite;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3));
`;

export const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StatLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
`;

export const FeaturesSection = styled.section`
  max-width: 1200px;
  margin: 8rem auto 4rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    margin: 6rem auto 3rem;
    padding: 0 1rem;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`;

export const FeatureCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  padding: 3rem 2rem;
  border-radius: 25px;
  text-align: center;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    
    &::before {
      opacity: 1;
    }
  }
`;

export const FeatureIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3));
`;

export const FeatureTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  position: relative;
  z-index: 2;
`;

export const FeatureDescription = styled.p`
  opacity: 0.9;
  line-height: 1.7;
  font-size: 1.1rem;
  position: relative;
  z-index: 2;
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: ${float} 2s ease-in-out infinite;
  font-size: 2rem;
  opacity: 0.7;
  
  @media (max-width: 768px) {
    bottom: 1rem;
  }
`;

