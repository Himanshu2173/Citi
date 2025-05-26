import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/auth/LoginForm';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const AuthPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px); /* Adjust height for Navbar and Footer */
  padding: ${({ theme }) => theme.spacing.xlarge};
  background-color: ${({ theme }) => theme.colors.darkBackground};
`;

const LoginPage = () => {
  return (
    <AuthPageContainer>
      <LoginForm />
    </AuthPageContainer>
  );
};

export default LoginPage;