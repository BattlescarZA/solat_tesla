import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CommercialContainer = styled.div`
  min-height: 100vh;
  background: white;
`;

const HeroSection = styled.div`
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.pexels.com/photos/2225617/pexels-photo-2225617.jpeg') center/cover no-repeat;
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

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

const SolutionCard = styled(motion.div)`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SolutionIcon = styled.div`
  width: 70px;
  height: 70px;
  background: #2ecc71;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;

  svg {
    width: 35px;
    height: 35px;
    color: white;
  }
`;

const SolutionTitle = styled.h3`
  font-size: 26px;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const SolutionDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  color: #666;

  svg {
    width: 20px;
    height: 20px;
    color: #2ecc71;
  }
`;

const CTASection = styled.div`
  background: linear-gradient(135deg, #2ecc71, #27ae60);
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
  color: #2ecc71;
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

const Commercial = () => {
  return (
    <CommercialContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Commercial Solar Solutions</Title>
          <Subtitle>
            Sustainable energy solutions for businesses of all sizes
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <SolutionsGrid>
          <SolutionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SolutionIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7l-2 4h4l-2 4m-2-8L6 11h4l-2 4m8-8l-2 4h4l-2 4M12 2L2 6v12l10 4 10-4V6L12 2z"/>
              </svg>
            </SolutionIcon>
            <SolutionTitle>Solar Installation</SolutionTitle>
            <SolutionDescription>
              Custom-designed solar installations for commercial properties, warehouses, and industrial facilities.
            </SolutionDescription>
            <BenefitsList>
              <BenefitItem>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                Reduced operational costs
              </BenefitItem>
              <BenefitItem>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                Energy independence
              </BenefitItem>
              <BenefitItem>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                Tax incentives
              </BenefitItem>
            </BenefitsList>
          </SolutionCard>

          <SolutionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SolutionIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.67 4H15V2H9v2H7.33C6.6 4 6 4.6 6 5.33v15.33C6 21.4 6.6 22 7.33 22h9.33c.74 0 1.34-.6 1.34-1.33V5.33C18 4.6 17.4 4 16.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"/>
              </svg>
            </SolutionIcon>
            <SolutionTitle>Energy Storage</SolutionTitle>
            <SolutionDescription>
              Advanced battery systems for uninterrupted power supply and peak demand management.
            </SolutionDescription>
            <BenefitsList>
              <BenefitItem>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                Backup power solution
              </BenefitItem>
              <BenefitItem>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                Load shifting capability
              </BenefitItem>
              <BenefitItem>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                Demand charge reduction
              </BenefitItem>
            </BenefitsList>
          </SolutionCard>
        </SolutionsGrid>
      </ContentSection>

      <CTASection>
        <CTAContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Transform Your Business</Title>
          <Subtitle>
            Contact us for a comprehensive energy assessment and custom solution
          </Subtitle>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Consultation
          </CTAButton>
        </CTAContent>
      </CTASection>
    </CommercialContainer>
  );
};

export default Commercial;