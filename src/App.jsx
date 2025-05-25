// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';
// import HomePage from './pages/HomePage';
// import CreateAccountPage from './pages/CreateAccountPage';
// import LoginPage from './pages/LoginPage';
// import DashboardPage from './pages/DashboardPage';
// import UserProfilePage from './pages/UserProfilePage';
// import TrackExpensesPage from './pages/TrackExpensesPage';
// import SetFinancialGoalsPage from './pages/SetFinancialGoalsPage';
// import TrackInvestmentsPage from './pages/TrackInvestmentsPage';
// import TrackIncomePage from './pages/TrackIncomePage'; // Import the new Income page
// import AboutPage from './pages/AboutPage';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/create-account" element={<CreateAccountPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/dashboard" element={<DashboardPage />} />
//         <Route path="/dashboard/profile" element={<UserProfilePage />} />
//         <Route path="/dashboard/expenses" element={<TrackExpensesPage />} />
//         <Route path="/dashboard/goals" element={<SetFinancialGoalsPage />} />
//         <Route path="/dashboard/investments" element={<TrackInvestmentsPage />} />
//         <Route path="/dashboard/income" element={<TrackIncomePage />} /> {/* New Income route */}
//         {/* Placeholder routes for other pages under dashboard */}
//         <Route path="/dashboard/create-profile" element={<div>Create Profile Page</div>} />

//         {/* Placeholder routes for other general pages */}
//         <Route path="/services" element={<div>Services Page</div>} />
//         <Route path="/pricing" element={<AboutPage />} />
//         <Route path="/about" element={<div>About Page</div>} />
//         <Route path="/faq" element={<div>FAQ Page</div>} />
//         <Route path="/contact" element={<div>Contact Page</div>} />
//         <Route path="/blog" element={<div>Blog Page</div>} />
//         <Route path="/terms" element={<div>Terms Page</div>} />
//         <Route path="/privacy" element={<div>Privacy Page</div>} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import AboutPage from './pages/AboutPage'; // Import the new AboutPage

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/profile" element={<UserProfilePage />} />
        <Route path="/dashboard/expenses" element={<TrackExpensesPage />} />
        <Route path="/dashboard/goals" element={<SetFinancialGoalsPage />} />
        <Route path="/dashboard/investments" element={<TrackInvestmentsPage />} />
        <Route path="/dashboard/income" element={<TrackIncomePage />} />
        <Route path="/about" element={<AboutPage />} /> {/* New About Page route */}
        {/* Placeholder routes for other pages under dashboard */}
        <Route path="/dashboard/create-profile" element={<div>Create Profile Page</div>} />

        {/* Placeholder routes for other general pages */}
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/pricing" element={<div>Pricing Page</div>} />
        <Route path="/faq" element={<div>FAQ Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/blog" element={<div>Blog Page</div>} />
        <Route path="/terms" element={<div>Terms Page</div>} />
        <Route path="/privacy" element={<div>Privacy Page</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;