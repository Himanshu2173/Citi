// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the Auth Context
export const AuthContext = createContext();

// Create the Auth Provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state for initial auth check

  // Initialize authentication state on app load
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Check if user is authenticated (e.g., valid token exists)
  const checkAuthStatus = async () => {
    try {
      const token = getAuthToken();
      if (!token) {
        setLoading(false);
        return;
      }

      // Validate token with backend
      const userData = await validateToken(token);
      if (userData) {
        setIsAuthenticated(true);
        setCurrentUser(userData);
      } else {
        // Invalid token, clear it
        clearAuthToken();
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      clearAuthToken();
    } finally {
      setLoading(false);
    }
  };

  // Get token from storage (in a real app, this would be localStorage)
  const getAuthToken = () => {
    // In this demo, we'll use a simple in-memory approach
    // In production, use localStorage.getItem('authToken')
    return sessionStorage.getItem('authToken');
  };

  // Store token (in a real app, this would be localStorage)
  const setAuthToken = (token) => {
    // In production, use localStorage.setItem('authToken', token)
    sessionStorage.setItem('authToken', token);
  };

  // Clear token
  const clearAuthToken = () => {
    // In production, use localStorage.removeItem('authToken')
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('currentUser');
  };

  // Validate token with backend
  const validateToken = async (token) => {
    try {
      const response = await fetch('/api/auth/validate', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data.user;
      }
      return null;
    } catch (error) {
      // For demo purposes, simulate token validation
      // Remove this in production
      try {
        const userData = JSON.parse(sessionStorage.getItem('currentUser'));
        return userData;
      } catch {
        return null;
      }
    }
  };

  // Login function
  const login = (userData, token) => {
    setIsAuthenticated(true);
    setCurrentUser(userData);
    
    if (token) {
      setAuthToken(token);
    }
    
    // Store user data for demo purposes
    sessionStorage.setItem('currentUser', JSON.stringify(userData));
  };

  // Logout function
  const logout = async () => {
    try {
      const token = getAuthToken();
      if (token) {
        // Notify backend about logout
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      }
    } catch (error) {
      console.error('Logout API call failed:', error);
    } finally {
      // Clear local state regardless of API call result
      setIsAuthenticated(false);
      setCurrentUser(null);
      clearAuthToken();
      
      // Clear all user-specific data
      sessionStorage.clear();
    }
  };

  // API helper function to make authenticated requests
  const apiRequest = async (url, options = {}) => {
    const token = getAuthToken();
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    // Handle token expiration
    if (response.status === 401) {
      logout();
      throw new Error('Session expired. Please log in again.');
    }

    return response;
  };

  const value = {
    isAuthenticated,
    currentUser,
    loading,
    login,
    logout,
    checkAuthStatus,
    apiRequest, // Expose API helper
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily consume the Auth Context in components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};