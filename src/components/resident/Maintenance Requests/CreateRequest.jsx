// src/pages/maintenance/CreateRequest.jsx
import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { createMaintenanceRequest } from './../../../services/maintenanceService';

const CreateRequest = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    issue: '',
    priority: 'Low',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMaintenanceRequest(formData);
      toast.success('Maintenance request submitted');
      navigate('/resident/requests'); // Redirect to request list page
    } catch (error) {
      toast.error('Failed to submit request');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4 text-center">New Maintenance Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Issue</label>
          <input
            type="text"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            required
            placeholder="Enter issue"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="Low">low</option>
            <option value="Medium">medium</option>
            <option value="High">high</option>
          </select>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRequest;
