import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding: 80px 0;
  color: white;
  background: #000;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: clamp(32px, 4vw, 48px);
  text-align: center;
  margin-bottom: 60px;
  color: white;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 40px;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  background: #3498db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;

  svg {
    width: 35px;
    height: 35px;
    color: white;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  color: white;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`;

const Services = () => {
  return (
    <ServicesSection>
      <video
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src="/videos/test.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Overlay />
      
      <Container>
        <Title>Our Services</Title>
        <ServicesGrid>
          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ServiceIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7l-2 4h4l-2 4m-2-8L6 11h4l-2 4m8-8l-2 4h4l-2 4M12 2L2 6v12l10 4 10-4V6L12 2z"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Residential Solar</ServiceTitle>
            <ServiceDescription>
              Custom solar solutions for homes, including panel installation and battery backup systems.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ServiceIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Commercial Solutions</ServiceTitle>
            <ServiceDescription>
              Energy solutions for businesses, reducing operational costs and carbon footprint.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ServiceIcon>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.67 4H15V2H9v2H7.33C6.6 4 6 4.6 6 5.33v15.33C6 21.4 6.6 22 7.33 22h9.33c.74 0 1.34-.6 1.34-1.33V5.33C18 4.6 17.4 4 16.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Energy Storage</ServiceTitle>
            <ServiceDescription>
              Advanced battery systems for reliable backup power and optimal energy management.
            </ServiceDescription>
          </ServiceCard>
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;