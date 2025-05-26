import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkBackground};
  padding: ${({ theme }) => theme.spacing.xlarge};
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: ${({ theme }) => theme.spacing.xlarge};
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  flex-wrap: wrap;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 0.95em;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 0.9em;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink to="/about">About</FooterLink> {/* [cite: 9] */}
        <FooterLink to="/faq">FAQ</FooterLink> {/* [cite: 9] */}
        <FooterLink to="/contact">Contact</FooterLink> {/* [cite: 9] */}
        <FooterLink to="/blog">Blog</FooterLink> {/* [cite: 9] */}
        <FooterLink to="/terms">Terms</FooterLink> {/* [cite: 9] */}
        <FooterLink to="/privacy">Privacy</FooterLink> {/* [cite: 9] */}
      </FooterLinks>
      <Copyright>© 2025 ManageYourFinance. All rights reserved.</Copyright> {/* [cite: 9] */}
    </FooterContainer>
  );
};

export default Footer;