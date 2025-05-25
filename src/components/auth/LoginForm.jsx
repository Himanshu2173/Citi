import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../common/Input';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.xlarge};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  max-width: 450px;
  width: 100%;
  text-align: center;
`;

const FormTitle = styled.h2`
  font-size: 2em;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  margin-top: ${({ theme }) => theme.spacing.medium};
  display: block;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send data to backend for authentication
    console.log('Login data:', { email, password });
    alert('Logged in successfully (simulated)!');
    // Clear form or redirect to dashboard
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Welcome Back</FormTitle>
      <Input
        label="Email Address"
        id="loginEmail"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        label="Password"
        id="loginPassword"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button primary type="submit">
        Login
      </Button>
      <p>
        Don't have an account?{' '}
        <StyledLink to="/create-account">
          Sign up
        </StyledLink>
      </p>
    </FormContainer>
  );
};

export default LoginForm;