import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CreateAccountPage from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import UserProfilePage from './pages/UserProfilePage';
import TrackExpensesPage from './pages/TrackExpensesPage';
import SetFinancialGoalsPage from './pages/SetFinancialGoalsPage';
import TrackInvestmentsPage from './pages/TrackInvestmentsPage';
import TrackIncomePage from './pages/TrackIncomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/pricing" element={<div>Pricing Page</div>} />
          <Route path="/faq" element={<div>FAQ Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
          <Route path="/terms" element={<div>Terms Page</div>} />
          <Route path="/privacy" element={<div>Privacy Page</div>} />

          {/* Protected routes - require authentication */}
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route index element={<DashboardPage />} />
            <Route path="profile" element={<UserProfilePage />} />
            <Route path="expenses" element={<TrackExpensesPage />} />
            <Route path="goals" element={<SetFinancialGoalsPage />} />
            <Route path="investments" element={<TrackInvestmentsPage />} />
            <Route path="income" element={<TrackIncomePage />} />
            <Route path="create-profile" element={<div>Create Profile Page</div>} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;