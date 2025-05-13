import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', role: 'resident',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', { ...formData, isSelfRegister: true });
      toast.success('Registered successfully! Please login.');
      navigate('/login'); // ⬅️ Redirect to login
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Register</h2>

        <input type="text" name="name" placeholder="Name" value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded" required />

        <input type="email" name="email" placeholder="Email" value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded" required />

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

        <select name="role" value={formData.role} onChange={handleChange}
          className="w-full px-3 py-2 border rounded">
          <option value="resident">Resident</option>
          <option value="staff">Staff</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Register
        </button>

        <p className="text-sm text-center">
          Already have an account? <span onClick={() => navigate('/login')} className="text-blue-600 cursor-pointer">Login</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
