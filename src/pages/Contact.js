import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: white;
`;

const HeroSection = styled.div`
  height: 40vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: clamp(40px, 5vw, 56px);
  font-weight: 600;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  background: rgba(255, 255, 255, 0.2);
  padding: 40px;
  border-radius: 15px;
  backdrop-filter: blur(5px);
`;

const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 40px 20px;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoTitle = styled.h3`
  font-size: 24px;
  color: #3498db;
  margin-bottom: 16px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: #3498db;
    border-radius: 2px;
  }
`;

const InfoText = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 20px;
    height: 20px;
    color: #3498db;
  }
`;

const MapContainer = styled(motion.div)`
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const ContactLink = styled.a`
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #2980b9;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Contact Us</Title>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ContactInfo
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <InfoGroup>
            <InfoTitle>HEAD OFFICE</InfoTitle>
            <InfoText>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              103 Garfield Road, Kenwyn, 7790, Cape Town, South Africa
            </InfoText>
            <InfoText>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <ContactLink href="mailto:info@mltpower.com">info@mltpower.com</ContactLink>
            </InfoText>
            <InfoText>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7z"/>
              </svg>
              <ContactLink href="tel:+27879432299">+27 87 943 2299</ContactLink> (Sharecall)
            </InfoText>
            <InfoText>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3 7h-3v3h-2v-3H9v-2h3V6h2v3h3v2z"/>
              </svg>
              P.O. Box 14446, Kenwyn, 7790, Cape Town, South Africa
            </InfoText>
          </InfoGroup>
        </ContactInfo>

        <MapContainer
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.6661750464146!2d18.5!3d-33.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d7f5b4b5b5b%3A0x5b5b5b5b5b5b5b5b!2s103%20Garfield%20Rd%2C%20Kenwyn%2C%20Cape%20Town%2C%207790!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MLT Power Location"
          />
        </MapContainer>
      </ContentSection>
    </ContactContainer>
  );
};

export default Contact;