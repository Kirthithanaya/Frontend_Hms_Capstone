import React from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const ResidentDashboard = () => {
  const modules = [
    { name: 'Chech In Out Room', path: '/CheckINOut-Room', emoji: '🛏️' },
    { name: 'Get My Maintenance Request', path: '/getmy-request', emoji: '🛠️' },
    { name: 'Get My Billing & Payments', path: '/getmy-payment', emoji: '💳' },
  ];

  // Sample data for charts (placeholder)
  const chartData = [
    { month: 'Jan', Revenue: 12000, Expenses: 8000 },
    { month: 'Feb', Revenue: 15000, Expenses: 9000 },
    { month: 'Mar', Revenue: 18000, Expenses: 11000 },
    { month: 'Apr', Revenue: 16000, Expenses: 9500 },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        📊 Welcome to Your Hostel Dashboard
      </h1>

      {/* Module Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {modules.map((mod) => (
          <Link
            key={mod.name}
            to={mod.path}
            className="bg-gradient-to-br from-blue-100 to-white p-6 rounded-2xl shadow hover:shadow-xl transition duration-300 border border-gray-200 hover:border-blue-300 group"
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl">{mod.emoji}</div>
              <div>
                <h2 className="text-xl font-semibold text-blue-700 group-hover:text-blue-900 transition">
                  {mod.name}
                </h2>
                <p className="text-gray-500 text-sm">Go to {mod.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Revenue vs Expenses</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Revenue" fill="#4f46e5" radius={[8, 8, 0, 0]} />
            <Bar dataKey="Expenses" fill="#f97316" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResidentDashboard;
