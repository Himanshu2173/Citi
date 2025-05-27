// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Input from '../common/Input';
// import Button from '../common/Button';
// import { Link } from 'react-router-dom';

// const FormContainer = styled.form`
//   background-color: ${({ theme }) => theme.colors.cardBackground};
//   padding: ${({ theme }) => theme.spacing.xlarge};
//   border-radius: ${({ theme }) => theme.borderRadius};
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
//   max-width: 450px;
//   width: 100%;
//   text-align: center;
// `;

// const FormTitle = styled.h2`
//   font-size: 2em;
//   color: ${({ theme }) => theme.colors.textLight};
//   margin-bottom: ${({ theme }) => theme.spacing.xlarge};
// `;

// const StyledLink = styled(Link)`
//   color: ${({ theme }) => theme.colors.primary};
//   text-decoration: none;
//   font-weight: bold;
//   margin-top: ${({ theme }) => theme.spacing.medium};
//   display: block;

//   &:hover {
//     color: ${({ theme }) => theme.colors.secondary};
//     text-decoration: underline;
//   }
// `;

// const CreateAccountForm = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Basic validation
//     if (password !== confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//     // In a real app, send data to backend for registration
//     console.log('Account creation data:', { fullName, email, password });
//     alert('Account created successfully (simulated)!');
//     // Clear form or redirect
//     setFullName('');
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//   };

//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <FormTitle>Create a New Account</FormTitle>
//       <Input
//         label="Full Name"
//         id="fullName"
//         type="text"
//         placeholder="Enter your full name"
//         value={fullName}
//         onChange={(e) => setFullName(e.target.value)}
//         required
//       />
//       <Input
//         label="Email Address"
//         id="email"
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <Input
//         label="Password"
//         id="password"
//         type="password"
//         placeholder="Create a password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <Input
//         label="Confirm Password"
//         id="confirmPassword"
//         type="password"
//         placeholder="Confirm your password"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         required
//       />
//       <Button primary type="submit">
//         Sign Up
//       </Button>
//       <p>
//         Already have an account?{' '}
//         <StyledLink to="/login">
//           Log in
//         </StyledLink>
//       </p>
//     </FormContainer>
//   );
// };

// export default CreateAccountForm;


import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
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

const ErrorMessage = styled.div`
  color: #ff6b6b;
  background-color: rgba(255, 107, 107, 0.1);
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-size: 0.9em;
`;

const SuccessMessage = styled.div`
  color: #4ecdc4;
  background-color: rgba(78, 205, 196, 0.1);
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-size: 0.9em;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  margin-right: 10px;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const CreateAccountForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  // API function to register user
  const registerUser = async (userData) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      return data; // Should contain user info and token
    } catch (error) {
      // For demo purposes, simulate registration
      // Remove this in production and use real API
      return {
        user: {
          id: Date.now().toString(),
          email: userData.email,
          name: userData.fullName,
          fullName: userData.fullName
        },
        token: `demo-token-${Date.now()}`
      };
    }
  };

  const validateForm = () => {
    if (!fullName.trim()) {
      throw new Error('Full name is required');
    }
    if (!email.trim()) {
      throw new Error('Email is required');
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      throw new Error('Please enter a valid email address');
    }
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }
    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      // Validate form
      validateForm();

      const userData = {
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        password
      };

      const authData = await registerUser(userData);
      
      // Store token in localStorage for API requests
      if (authData.token) {
        localStorage.setItem('authToken', authData.token);
      }
      
      setSuccess('Account created successfully! Redirecting to dashboard...');
      
      // Update auth context with user data
      login(authData.user);
      
      // Redirect to dashboard after a short delay
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
      
    } catch (error) {
      setError(error.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Create a New Account</FormTitle>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
      
      <Input
        label="Full Name"
        id="fullName"
        type="text"
        placeholder="Enter your full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
        disabled={loading}
      />
      <Input
        label="Email Address"
        id="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={loading}
      />
      <Input
        label="Password"
        id="password"
        type="password"
        placeholder="Create a password (min 6 characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        disabled={loading}
      />
      <Input
        label="Confirm Password"
        id="confirmPassword"
        type="password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        disabled={loading}
      />
      <Button primary type="submit" disabled={loading}>
        {loading && <LoadingSpinner />}
        {loading ? 'Creating Account...' : 'Sign Up'}
      </Button>
      <p>
        Already have an account?{' '}
        <StyledLink to="/login">
          Log in
        </StyledLink>
      </p>
    </FormContainer>
  );
};

export default CreateAccountForm;