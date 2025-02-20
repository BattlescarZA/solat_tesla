import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.$isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.$isScrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  padding: 20px 40px;
  box-shadow: ${props => props.$isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${props => props.$isScrolled ? '#333' : '#fff'};
  font-size: 24px;
  font-weight: 700;

  img {
    height: 40px;
    margin-right: 10px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.$isScrolled ? '#333' : '#fff'};
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #3498db;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover:after,
  &.active:after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.$isScrolled ? '#333' : '#fff'};
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: white;
  padding: 20px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #333;
  padding: 15px 0;
  font-size: 18px;
  border-bottom: 1px solid #eee;
  transition: color 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: #3498db;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <Nav>
        <Logo to="/" $isScrolled={isScrolled}>
          <img src="/images/logo.png" alt="MLT Power" />
        </Logo>

        <NavLinks>
          <NavLink 
            to="/" 
            $isScrolled={isScrolled}
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </NavLink>
          <NavLink 
            to="/residential" 
            $isScrolled={isScrolled}
            className={location.pathname === '/residential' ? 'active' : ''}
          >
            Residential
          </NavLink>
          <NavLink 
            to="/commercial" 
            $isScrolled={isScrolled}
            className={location.pathname === '/commercial' ? 'active' : ''}
          >
            Commercial
          </NavLink>
          <NavLink 
            to="/utility" 
            $isScrolled={isScrolled}
            className={location.pathname === '/utility' ? 'active' : ''}
          >
            Utility
          </NavLink>
          <NavLink 
            to="/contact" 
            $isScrolled={isScrolled}
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </NavLink>
        </NavLinks>

        <MobileMenuButton 
          $isScrolled={isScrolled} 
          onClick={toggleMobileMenu}
        >
          ☰
        </MobileMenuButton>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <MobileNavLink to="/" onClick={toggleMobileMenu}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/residential" onClick={toggleMobileMenu}>
                Residential
              </MobileNavLink>
              <MobileNavLink to="/commercial" onClick={toggleMobileMenu}>
                Commercial
              </MobileNavLink>
              <MobileNavLink to="/utility" onClick={toggleMobileMenu}>
                Utility
              </MobileNavLink>
              <MobileNavLink to="/contact" onClick={toggleMobileMenu}>
                Contact
              </MobileNavLink>
            </MobileMenu>
          )}
        </AnimatePresence>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;