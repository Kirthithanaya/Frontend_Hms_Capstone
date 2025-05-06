import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', formData);
      const { token, user } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      toast.success('Login successful!');

      // 🔀 Navigate based on role
      if (user.role === 'admin') {
        navigate('/admin-dashboard');
      } else if (user.role === 'resident') {
        navigate('/resident-dashboard');
      } else if (user.role === 'staff') {
        navigate('/staffdashboard');
      } else {
        navigate('/');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded pr-10"
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 cursor-pointer text-sm text-blue-500"
          >
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Login
        </button>

        <p className="text-sm text-center">
          Forgot password? <span onClick={() => navigate('/forgot-password')} className="text-blue-600 cursor-pointer">Reset</span>
        </p>

        <p className="text-sm text-center">
          Don't have an account? <span onClick={() => navigate('/register')} className="text-blue-600 cursor-pointer">Register</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
