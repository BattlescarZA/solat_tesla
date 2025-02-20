import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: #171a20;
  color: white;
  padding: 80px 40px 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 60px;
  position: relative;
  z-index: 1;
`;

const FooterSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #3498db;
  margin-bottom: 16px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 2px;
    background: #3498db;
    transition: width 0.3s ease;
  }

  ${FooterSection}:hover &::after {
    width: 100%;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-size: 14px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #3498db;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #3498db;
    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const BottomBar = styled.div`
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  color: #888;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding: 8px 12px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(52, 152, 219, 0.2);
    color: #3498db;
    transform: translateY(-2px);
  }
`;

const BackToTop = styled(motion.button)`
  position: absolute;
  bottom: 40px;
  right: 40px;
  background: rgba(52, 152, 219, 0.1);
  border: none;
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(52, 152, 219, 0.2);
    transform: translateY(-5px);
  }

  &::before {
    content: '↑';
    font-size: 20px;
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FooterTitle>Contact Us</FooterTitle>
          <ContactInfo>
            <span>📞</span>
            <FooterLink href="tel:+27879432299">+27 87 943 2299</FooterLink>
          </ContactInfo>
          <ContactInfo>
            <span>✉️</span>
            <FooterLink href="mailto:info@mltpower.com">info@mltpower.com</FooterLink>
          </ContactInfo>
          <ContactInfo>
            <span>📍</span>
            <FooterLink href="#">South Africa</FooterLink>
          </ContactInfo>
        </FooterSection>

        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#services">Services</FooterLink>
          <FooterLink href="#about">About Us</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterSection>

        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <FooterTitle>Our Solutions</FooterTitle>
          <FooterLink href="#residential">Residential Backup</FooterLink>
          <FooterLink href="#solar">Solar Systems</FooterLink>
          <FooterLink href="#maintenance">Maintenance</FooterLink>
          <FooterLink href="#support">24/7 Support</FooterLink>
        </FooterSection>
      </FooterContent>

      <BottomBar>
        <Copyright>
          © {new Date().getFullYear()} MLT Power. All rights reserved. Made in South Africa
        </Copyright>
        <SocialLinks>
          <SocialLink href="https://facebook.com/mltpower" target="_blank" rel="noopener noreferrer">
            Facebook
          </SocialLink>
          <SocialLink href="https://twitter.com/mltpower" target="_blank" rel="noopener noreferrer">
            Twitter
          </SocialLink>
          <SocialLink href="https://linkedin.com/company/mltpower" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </SocialLink>
        </SocialLinks>
      </BottomBar>

      <BackToTop
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
    </FooterContainer>
  );
};

export default Footer;