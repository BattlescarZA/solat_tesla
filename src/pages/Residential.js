import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ResidentialContainer = styled.div`
  min-height: 100vh;
  background: white;
`;

const HeroSection = styled.div`
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 20px;
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  background: rgba(255, 255, 255, 0.2);
  padding: 40px;
  border-radius: 15px;
  backdrop-filter: blur(5px);
`;

const Title = styled.h1`
  font-size: clamp(40px, 5vw, 56px);
  font-weight: 600;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.p`
  font-size: clamp(18px, 2.5vw, 24px);
  line-height: 1.6;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 40px;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: #3498db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  svg {
    width: 30px;
    height: 30px;
    color: white;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  color: #2c3e50;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`;

const CTASection = styled.div`
  background: linear-gradient(135deg, #3498db, #2980b9);
  padding: 80px 40px;
  text-align: center;
  color: white;
`;

const CTAContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`;

const CTAButton = styled(motion.button)`
  background: white;
  color: #3498db;
  border: none;
  padding: 15px 40px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-top: 30px;

  &:hover {
    transform: scale(1.05);
  }
`;

const Residential = () => {
  return (
    <ResidentialContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Residential Solar Solutions</Title>
          <Subtitle>
            Power your home with clean, reliable solar energy and advanced backup systems
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <FeaturesGrid>
          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FeatureIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7l-2 4h4l-2 4m-2-8L6 11h4l-2 4m8-8l-2 4h4l-2 4M12 2L2 6v12l10 4 10-4V6L12 2z"/>
              </svg>
            </FeatureIcon>
            <FeatureTitle>Solar Panels</FeatureTitle>
            <FeatureDescription>
              High-efficiency solar panels designed for optimal performance in South African conditions, maximizing your energy production.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FeatureIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.67 4H15V2H9v2H7.33C6.6 4 6 4.6 6 5.33v15.33C6 21.4 6.6 22 7.33 22h9.33c.74 0 1.34-.6 1.34-1.33V5.33C18 4.6 17.4 4 16.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"/>
              </svg>
            </FeatureIcon>
            <FeatureTitle>Battery Storage</FeatureTitle>
            <FeatureDescription>
              Advanced battery systems for reliable backup power during outages and optimal energy management.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FeatureIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </FeatureIcon>
            <FeatureTitle>Smart Monitoring</FeatureTitle>
            <FeatureDescription>
              Real-time monitoring and control of your solar system through our advanced mobile app and web platform.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </ContentSection>

      <CTASection>
        <CTAContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Ready to Go Solar?</Title>
          <Subtitle>
            Get a free consultation and custom quote for your home's solar solution
          </Subtitle>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </CTAButton>
        </CTAContent>
      </CTASection>
    </ResidentialContainer>
  );
};

export default Residential;