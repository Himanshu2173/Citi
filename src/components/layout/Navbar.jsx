import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.xlarge};
  background-color: ${({ theme }) => theme.colors.darkBackground};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  text-decoration: none;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const LogoImage = styled.img`
  height: 80px;
  width: 80px;
  object-fit: contain;
`;

const LogoText = styled.span`
  font-size: 1.8em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textLight};
  
  ${LogoContainer}:hover & {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.1em;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.small};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const PrimaryButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer to="/">
        <LogoImage src="/src/Logo.png" alt="Finoramic Logo" />
        <LogoText>Finoramic</LogoText>
      </LogoContainer>
      <NavLinks>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/about">About</NavLink>
      </NavLinks>
      <AuthButtons>
        <SecondaryButton to="/login">Login In</SecondaryButton>
        <PrimaryButton to="/create-account">Create →</PrimaryButton>
      </AuthButtons>
    </NavContainer>
  );
};

export default Navbar;