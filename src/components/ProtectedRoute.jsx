import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// This function checks if the user is authenticated
const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');  // Assume you store role in localStorage

  // If there's no token or if the role doesn't match, redirect to login
  if (!token) {
    toast.error('You need to login first');
    return <Navigate to="/login" />;
  }

  // If role doesn't match the required one (admin or resident), redirect to an error page or login
  if (role && userRole !== role) {
    toast.error('You do not have access to this page');
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
