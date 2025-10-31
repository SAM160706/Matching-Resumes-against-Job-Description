import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 animate-fadeIn">
      <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700 animate-slideUp">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4 animate-pulse">
            JobMatch AI
          </h1>
          <p className="text-gray-300 text-lg animate-fadeIn animation-delay-300">
            Find your perfect match with AI-powered job matching
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => navigate('/applicant-login')}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-slideInLeft animation-delay-500"
          >
            I'm an Applicant
          </button>
          <button
            onClick={() => navigate('/recruiter-login')}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600 transform hover:scale-105 animate-slideInRight animation-delay-700"
          >
            I'm a Recruiter
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;