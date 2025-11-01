import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import LandingPage from './pages/LandingPage';
import ApplicantDashboard from './pages/ApplicantDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/applicant-login" element={<Login userType="applicant" />} />
              <Route path="/recruiter-login" element={<Login userType="recruiter" />} />
              <Route path="/applicant-signup" element={<Signup userType="applicant" />} />
              <Route path="/recruiter-signup" element={<Signup userType="recruiter" />} />
              <Route path="/applicant-dashboard" element={<ApplicantDashboard />} />
              <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;