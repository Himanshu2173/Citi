import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  text-align: center;
`;

const WelcomeMessage = styled.h2`
  font-size: 2.5em;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.small};

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const SnapshotText = styled.p`
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.textDark};

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const DashboardHeader = ({ userName = 'User' }) => {
  return (
    <HeaderContainer>
      <WelcomeMessage>Welcome Back, {userName}!</WelcomeMessage>
      <SnapshotText>Here's a snapshot of your financial journey.</SnapshotText>
    </HeaderContainer>
  );
};

export default DashboardHeader;