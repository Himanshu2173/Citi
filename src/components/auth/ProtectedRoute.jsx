// src/components/auth/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  background-color: ${({ theme }) => theme.colors.darkBackground};
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(78, 205, 196, 0.3);
  border-radius: 50%;
  border-top-color: #4ecdc4;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: ${({ theme }) => theme.spacing.medium};
  font-size: 1.1em;
`;

const LoadingWrapper = styled.div`
  text-align: center;
`;

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <LoadingContainer>
        <LoadingWrapper>
          <LoadingSpinner />
          <LoadingText>Checking authentication...</LoadingText>
        </LoadingWrapper>
      </LoadingContainer>
    );
  }

  // If authenticated, render the child routes (Outlet), otherwise redirect to login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;