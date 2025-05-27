// src/components/layout/Navbar.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.navBackground};
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.8em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.navBackground};
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.medium};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: rgba(78, 205, 196, 0.1);
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9em;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
  }
`;

const UserEmail = styled.span`
  color: ${({ theme }) => theme.colors.textDark};
`;

const LogoutButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  font-size: 0.9em;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.5em;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo to="/" onClick={closeMobileMenu}>
          FinanceTracker
        </Logo>

        <MobileMenuButton onClick={toggleMobileMenu}>
          ☰
        </MobileMenuButton>

        <NavLinks isOpen={isMobileMenuOpen}>
          <NavLink to="/" onClick={closeMobileMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMobileMenu}>
            About
          </NavLink>
          <NavLink to="/services" onClick={closeMobileMenu}>
            Services
          </NavLink>
          <NavLink to="/pricing" onClick={closeMobileMenu}>
            Pricing
          </NavLink>

          {isAuthenticated ? (
            <>
              <NavLink to="/dashboard" onClick={closeMobileMenu}>
                Dashboard
              </NavLink>
              <UserInfo>
                <UserEmail>{currentUser?.email}</UserEmail>
                <LogoutButton onClick={handleLogout}>
                  Logout
                </LogoutButton>
              </UserInfo>
            </>
          ) : (
            <>
              <NavLink to="/login" onClick={closeMobileMenu}>
                Login
              </NavLink>
              <NavLink to="/create-account" onClick={closeMobileMenu}>
                Sign Up
              </NavLink>
            </>
          )}
        </NavLinks>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;