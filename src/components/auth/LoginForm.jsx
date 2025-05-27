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

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // In a real app, send data to backend for authentication
//     console.log('Login data:', { email, password });
//     alert('Logged in successfully (simulated)!');
//     // Clear form or redirect to dashboard
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <FormTitle>Welcome Back</FormTitle>
//       <Input
//         label="Email Address"
//         id="loginEmail"
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <Input
//         label="Password"
//         id="loginPassword"
//         type="password"
//         placeholder="Enter your password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <Button primary type="submit">
//         Login
//       </Button>
//       <p>
//         Don't have an account?{' '}
//         <StyledLink to="/create-account">
//           Sign up
//         </StyledLink>
//       </p>
//     </FormContainer>
//   );
// };

// export default LoginForm;
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

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  // API function to authenticate user
  const authenticateUser = async (credentials) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      return data; // Should contain user info and token
    } catch (error) {
      // For demo purposes, simulate authentication
      // Remove this in production and use real API
      if (credentials.email === 'demo@example.com' && credentials.password === 'demo123') {
        return {
          user: {
            id: '1',
            email: credentials.email,
            name: 'Demo User',
            fullName: 'Demo User'
          },
          token: 'demo-token-123'
        };
      }
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const credentials = { email, password };
      const authData = await authenticateUser(credentials);
      
      // Store token in localStorage for API requests
      if (authData.token) {
        localStorage.setItem('authToken', authData.token);
      }
      
      // Update auth context with user data
      login(authData.user);
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      setError(error.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Welcome Back</FormTitle>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <Input
        label="Email Address"
        id="loginEmail"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={loading}
      />
      <Input
        label="Password"
        id="loginPassword"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        disabled={loading}
      />
      <Button primary type="submit" disabled={loading}>
        {loading && <LoadingSpinner />}
        {loading ? 'Logging in...' : 'Login'}
      </Button>
      
      <p>
        Don't have an account?{' '}
        <StyledLink to="/create-account">
          Sign up
        </StyledLink>
      </p>
      
      {/* Demo credentials hint */}
      <p style={{ fontSize: '0.8em', color: '#888', marginTop: '20px' }}>
        Demo: demo@example.com / demo123
      </p>
    </FormContainer>
  );
};

export default LoginForm;