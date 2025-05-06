import api from './api';

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

// Login User
export const loginUser = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }

  }
// Forgot Password (Send reset email)
export const forgotPassword = async (email) => {
  try {
    const response = await api.post('/auth/forgot-password', { email });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error sending reset link');
  }
};

// Reset Password
export const resetPassword = async (token, newPassword) => {
  try {
    const response = await api.post(`/auth/reset-password/${token}`, { password: newPassword });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error resetting password');
  }
};
