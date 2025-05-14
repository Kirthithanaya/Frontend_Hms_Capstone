// src/components/Maintenance/CreateRequest.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createMaintenanceRequest } from '../../../services/maintenanceService';

const CreateRequest = () => {
  const [formData, setFormData] = useState({
    issueTitle: '',
    issueDescription: '',
    priority: 'Low',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMaintenanceRequest(formData); // API call
      toast.success('Request submitted successfully!');
      navigate('/maintenance'); // Redirect after success
    } catch (error) {
      toast.error('Failed to submit request.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Create Maintenance Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Issue Title */}
        <div>
          <label className="block font-medium mb-1">Issue Title</label>
          <input
            type="text"
            name="issueTitle"
            value={formData.issueTitle}
            onChange={handleChange}
            placeholder="e.g., Broken Window"
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Issue Description */}
        <div>
          <label className="block font-medium mb-1">Issue Description</label>
          <textarea
            name="issueDescription"
            value={formData.issueDescription}
            onChange={handleChange}
            placeholder="Describe the issue in detail..."
            rows="4"
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Priority */}
        <div>
          <label className="block font-medium mb-1">Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default CreateRequest;
