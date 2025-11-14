import React, { createContext, useContext, useState, useEffect } from 'react';
import apiService from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await apiService.getProfile();
      if (response.success) {
        setUser(response.user);
        localStorage.setItem('userType', response.user.userType);
        localStorage.setItem('userEmail', response.user.email);
      }
    } catch (error) {
      localStorage.removeItem('userType');
      localStorage.removeItem('userEmail');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password, userType) => {
    const response = await apiService.login(email, password, userType);
    if (response.success) {
      setUser(response.user);
      localStorage.setItem('userType', userType);
      localStorage.setItem('userEmail', email);
    }
    return response;
  };

  const register = async (userData) => {
    const response = await apiService.register(userData);
    // Don't automatically log in user after registration
    // User will need to login manually after signup
    return response;
  };

  const logout = async () => {
    try {
      await apiService.logout();
    } finally {
      setUser(null);
      // Clear all localStorage data
      localStorage.clear();
      // Replace current history entry to prevent back navigation
      window.history.replaceState(null, '', '/');
    }
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};