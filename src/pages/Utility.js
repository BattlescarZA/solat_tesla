import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const UtilityContainer = styled.div`
  min-height: 100vh;
  background: white;
`;

const HeroSection = styled.div`
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 20px;
`;

const HeroContent = styled(motion.div)`
  max-width: 900px;
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const StatNumber = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: #e67e22;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 18px;
  color: #666;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  background: #e67e22;
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

const ServiceTitle = styled.h3`
  font-size: 26px;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`;

const ProcessSection = styled.div`
  background: #f8f9fa;
  padding: 80px 0;
`;

const ProcessGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 0 40px;
`;

const ProcessStep = styled(motion.div)`
  text-align: center;
  padding: 30px;
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  background: #e67e22;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  margin: 0 auto 20px;
`;

const StepTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 15px;
  color: #2c3e50;
`;

const StepDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`;

const CTASection = styled.div`
  background: linear-gradient(135deg, #e67e22, #d35400);
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
  color: #e67e22;
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

const Utility = () => {
  return (
    <UtilityContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Utility-Scale Solar Solutions</Title>
          <Subtitle>
            Powering communities with large-scale renewable energy infrastructure
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <StatsGrid>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StatNumber>100+</StatNumber>
            <StatLabel>MW Installed</StatLabel>
          </StatCard>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <StatNumber>30+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatCard>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <StatNumber>150k+</StatNumber>
            <StatLabel>Homes Powered</StatLabel>
          </StatCard>
        </StatsGrid>

        <ServicesGrid>
          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ServiceIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Solar Farm Development</ServiceTitle>
            <ServiceDescription>
              End-to-end development of utility-scale solar farms, from site selection to grid connection.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ServiceIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Grid Integration</ServiceTitle>
            <ServiceDescription>
              Seamless integration of solar power plants with existing grid infrastructure and smart grid solutions.
            </ServiceDescription>
          </ServiceCard>
        </ServicesGrid>
      </ContentSection>

      <ProcessSection>
        <ProcessGrid>
          <ProcessStep
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StepNumber>1</StepNumber>
            <StepTitle>Planning</StepTitle>
            <StepDescription>Site assessment and detailed project planning</StepDescription>
          </ProcessStep>
          <ProcessStep
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <StepNumber>2</StepNumber>
            <StepTitle>Development</StepTitle>
            <StepDescription>Construction and system installation</StepDescription>
          </ProcessStep>
          <ProcessStep
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <StepNumber>3</StepNumber>
            <StepTitle>Integration</StepTitle>
            <StepDescription>Grid connection and system testing</StepDescription>
          </ProcessStep>
          <ProcessStep
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <StepNumber>4</StepNumber>
            <StepTitle>Operation</StepTitle>
            <StepDescription>Monitoring and maintenance services</StepDescription>
          </ProcessStep>
        </ProcessGrid>
      </ProcessSection>

      <CTASection>
        <CTAContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Start Your Utility Project</Title>
          <Subtitle>
            Let's discuss your utility-scale solar power requirements
          </Subtitle>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Team
          </CTAButton>
        </CTAContent>
      </CTASection>
    </UtilityContainer>
  );
};

export default Utility;