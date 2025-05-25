// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the Auth Context
export const AuthContext = createContext();

// Create the Auth Provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Initialize from localStorage
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem('currentUser')) || null;
  });

  // Effect to update localStorage whenever isAuthenticated or currentUser changes
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [isAuthenticated, currentUser]);

  // Simulate login
  const login = (userData) => {
    setIsAuthenticated(true);
    setCurrentUser(userData); // Store some user data, e.g., { email: 'user@example.com' }
  };

  // Simulate logout
  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    // Clear all app-specific data on logout for a clean state
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('expenses'); // Clear expenses
    localStorage.removeItem('financialGoals'); // Clear goals
    localStorage.removeItem('investments'); // Clear investments
    localStorage.removeItem('incomeEntries'); // Clear income
    // Add any other localStorage items you want to clear on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};