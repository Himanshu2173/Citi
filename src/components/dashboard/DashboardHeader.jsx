import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';

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

const UserInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: rgba(78, 205, 196, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`;

const UserEmail = styled.p`
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.textDark};
  margin: 0;
`;

const DashboardHeader = () => {
  const { currentUser } = useAuth();
  
  // Extract user name - try multiple fields for flexibility
  const getUserName = () => {
    if (!currentUser) return 'User';
    
    // Try different name fields
    const name = currentUser.name || 
                 currentUser.fullName || 
                 currentUser.firstName || 
                 (currentUser.email ? currentUser.email.split('@')[0] : 'User');
    
    // Capitalize first letter
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const userName = getUserName();

  return (
    <HeaderContainer>
      <WelcomeMessage>Welcome Back, {userName}!</WelcomeMessage>
      <SnapshotText>Here's a snapshot of your financial journey.</SnapshotText>
      
      {currentUser && (
        <UserInfo>
          <UserEmail>Logged in as: {currentUser.email}</UserEmail>
        </UserInfo>
      )}
    </HeaderContainer>
  );
};

export default DashboardHeader;