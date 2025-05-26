// src/components/auth/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import useAuth from your context

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth(); // Get authentication status from context

  // If authenticated, render the child routes (Outlet), otherwise redirect to login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;