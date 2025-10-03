import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  color: white;
  padding: 3rem 2rem 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #667eea;
`;

const FooterLink = styled.a`
  color: #cbd5e0;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #667eea;
  }
`;

const FooterText = styled.p`
  color: #cbd5e0;
  line-height: 1.6;
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid #4a5568;
  text-align: center;
  color: #a0aec0;
`;



const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>🎵 Song Sphere</FooterTitle>
          <FooterText>
            Your ultimate music management platform. Organize, analyze, and discover 
            insights about your music collection with beautiful visualizations.
          </FooterText>
         
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/songs">Songs</FooterLink>
          <FooterLink href="/statistics">Statistics</FooterLink>
          <FooterLink href="/about">About</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Features</FooterTitle>
          <FooterLink href="#">Song Management</FooterLink>
          <FooterLink href="#">Music Analytics</FooterLink>
          <FooterLink href="#">Genre Insights</FooterLink>
          <FooterLink href="#">Artist Statistics</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Support</FooterTitle>
          <FooterLink href="mailto:support@songsphere.com">Contact Us</FooterLink>
          <FooterLink href="#">Documentation</FooterLink>
          <FooterLink href="#">API Reference</FooterLink>
          <FooterLink href="#">Help Center</FooterLink>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; {currentYear} Song Sphere. All rights reserved.</p>
        <p>Made with ❤️ for music lovers</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;