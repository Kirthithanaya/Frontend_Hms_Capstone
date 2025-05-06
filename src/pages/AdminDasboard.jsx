import React from 'react';
import { Link } from 'react-router-dom';
import {

  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const AdminDashboard = () => {
  const modules = [
    { name: 'Room Allocation', path: '/room-allocation' },
    { name: 'Maintenance Requests', path: '/maintenance-requests' },
    { name: 'Billing & Payments', path: '/billing' },
    { name: 'Resident Information', path: '/resident-info' },
    { name: 'Financial Reporting', path: '/financial-reporting' },
    { name: 'User Roles & Permissions', path: '/user-roles' },
    { name: 'Integration & Data Management', path: '/integration' },
    { name: 'Notifications & Alerts', path: '/notifications' },
  ];

  const financialData = [
    { month: 'Jan', revenue: 12000, expenses: 8000 },
    { month: 'Feb', revenue: 15000, expenses: 9000 },
    { month: 'Mar', revenue: 18000, expenses: 11000 },
    { month: 'Apr', revenue: 16000, expenses: 9500 },
  ];

  const occupancyData = [
    { month: 'Jan', occupancy: 75 },
    { month: 'Feb', occupancy: 80 },
    { month: 'Mar', occupancy: 78 },
    { month: 'Apr', occupancy: 85 },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">📊Welcome to Hostel Management Admin Dashboard</h1>

      {/* Module Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {modules.map((mod) => (
          <Link
            key={mod.name}
            to={mod.path}
            className="bg-gray-200 p-5 rounded-xl shadow hover:shadow-lg transition border"
          >
            <h2 className="text-xl font-semibold text-blue-600">{mod.name}</h2>
            <p className="text-sm text-gray-500 mt-1">Go to {mod.name}</p>
          </Link>
        ))}
      </div>

      {/* Financial Charts Section */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-6 text-center">Financial Overview</h2>

        {/* Revenue vs Expenses Chart */}
        <div className="mb-10">
          <h3 className="text-lg font-medium mb-2">Revenue vs Expenses</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={financialData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#3b82f6" />
              <Bar dataKey="expenses" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Occupancy Rate Chart */}
        <div>
          <h3 className="text-lg font-medium mb-2">Occupancy Rate Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={occupancyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis unit="%" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="occupancy" stroke="#10b981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
