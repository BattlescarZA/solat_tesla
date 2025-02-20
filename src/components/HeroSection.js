import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const HERO_IMAGE = 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg';

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #1a1a1a;
`;

const BackgroundOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
`;

const BackgroundImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(${HERO_IMAGE}) center/cover no-repeat;
  z-index: 0;
  transform-origin: center;
  will-change: transform, opacity;
`;

const Content = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 40px 60px;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const TextContent = styled.div`
  margin: auto;
  max-width: 800px;
  padding: 60px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform: perspective(1000px) rotateX(0deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: perspective(1000px) rotateX(2deg);
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(40px, 5vw, 56px);
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  line-height: 1.2;
  background: linear-gradient(120deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(18px, 2.5vw, 24px);
  margin-bottom: 30px;
  font-weight: 400;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  line-height: 1.4;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 16px;
    padding: 0 20px;
  }
`;

const Button = styled(motion.button)`
  padding: 16px 40px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
  border: none;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%);
    transition: 0.5s;
  }

  &:hover::after {
    transform: translateX(100%);
  }

  &.primary {
    background: rgba(255, 255, 255, 0.95);
    color: #000;
    backdrop-filter: blur(10px);
    &:hover {
      background: rgba(255, 255, 255, 1);
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  }

  &.secondary {
    background: rgba(23, 26, 32, 0.9);
    color: #fff;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    &:hover {
      background: rgba(23, 26, 32, 1);
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  z-index: 2;
`;

const Arrow = styled.div`
  width: 24px;
  height: 24px;
  border-right: 3px solid rgba(255, 255, 255, 0.8);
  border-bottom: 3px solid rgba(255, 255, 255, 0.8);
  transform: rotate(45deg);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
`;

const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('services');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isMounted) return null;

  return (
    <HeroContainer id="home">
      <BackgroundImage 
        style={{ scale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <BackgroundOverlay
        style={{ opacity }}
      />
      <Content>
        <TextContent>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Residential Backup Systems
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Made in South Africa, Designed for Your Home
          </Subtitle>
          <ButtonGroup
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button 
              className="primary" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </Button>
            <Button 
              className="secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </Button>
          </ButtonGroup>
        </TextContent>

        <ScrollIndicator
          onClick={scrollToNextSection}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Arrow />
        </ScrollIndicator>
      </Content>
    </HeroContainer>
  );
};

export default HeroSection;