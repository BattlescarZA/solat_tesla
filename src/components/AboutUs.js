import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: white;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(#3498db 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.1;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 120px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 80px 20px;
  }
`;

const ImageSection = styled(motion.div)`
  position: relative;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transform-style: preserve-3d;
  perspective: 1000px;

  @media (max-width: 968px) {
    height: 300px;
    margin-bottom: 40px;
  }
`;

const Image = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: url('https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg') center/cover no-repeat;
  transform-origin: center;
  will-change: transform;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled(motion.h2)`
  font-size: clamp(32px, 4vw, 40px);
  font-weight: 600;
  color: #171a20;
  margin-bottom: 16px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: #3498db;
    border-radius: 2px;

    @media (max-width: 968px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Subtitle = styled(motion.h3)`
  font-size: 20px;
  font-weight: 500;
  color: #3498db;
  margin-bottom: 24px;
`;

const Description = styled(motion.p)`
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 16px;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 40px;
  background: rgba(52, 152, 219, 0.05);
  padding: 30px;
  border-radius: 15px;
  border: 1px solid rgba(52, 152, 219, 0.1);
`;

const StatItem = styled(motion.div)`
  text-align: left;

  @media (max-width: 968px) {
    text-align: center;
  }
`;

const StatNumber = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: #3498db;
  margin-bottom: 8px;
  font-family: 'Gotham SSm', -apple-system, sans-serif;
`;

const StatLabel = styled.div`
  font-size: 16px;
  color: #666;
  font-weight: 500;
`;

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <AboutContainer id="about" ref={ref}>
      <BackgroundPattern />
      <ContentWrapper>
        <ImageSection
          initial={{ opacity: 0, rotateY: -20 }}
          animate={inView ? { opacity: 1, rotateY: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image style={{ scale, y }} />
        </ImageSection>

        <TextContent>
          <Title
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            About MLT Power
          </Title>
          <Subtitle
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Powering South Africa Since 1986
          </Subtitle>
          <Description
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            MLT Power has been at the forefront of South African energy solutions for over three decades. 
            We take pride in manufacturing our backup systems locally, ensuring the highest quality and 
            reliability for South African homes and businesses.
          </Description>
          <Description
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Our commitment to excellence and innovation has made us a trusted name in the power solutions 
            industry, providing South Africans with reliable backup power systems that keep their lives 
            running smoothly during load shedding and beyond.
          </Description>

          <Stats>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <StatNumber>37+</StatNumber>
              <StatLabel>Years of Experience</StatLabel>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <StatNumber>1000+</StatNumber>
              <StatLabel>Systems Installed</StatLabel>
            </StatItem>
          </Stats>
        </TextContent>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutUs;