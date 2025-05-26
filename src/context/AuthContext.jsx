// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the Auth Context
export const AuthContext = createContext();

// Create the Auth Provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Initialize from localStorage to persist login state across sessions
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const [currentUser, setCurrentUser] = useState(() => {
    // Initialize current user data from localStorage
    try {
      return JSON.parse(localStorage.getItem('currentUser')) || null;
    } catch (e) {
      console.error("Failed to parse currentUser from localStorage", e);
      return null;
    }
  });

  // Effect to update localStorage whenever isAuthenticated or currentUser changes
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [isAuthenticated, currentUser]);

  // Simulate login function
  const login = (userData) => {
    setIsAuthenticated(true);
    setCurrentUser(userData); // Store user data (e.g., { email: 'user@example.com', name: 'User Name' })
  };

  // Simulate logout function
  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    // Clear all authentication-related data and app-specific data from localStorage on logout
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('expenses');
    localStorage.removeItem('financialGoals');
    localStorage.removeItem('investments');
    localStorage.removeItem('incomeEntries');
    // Add any other localStorage keys your app uses to clear here
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily consume the Auth Context in components
export const useAuth = () => {
  return useContext(AuthContext);
};