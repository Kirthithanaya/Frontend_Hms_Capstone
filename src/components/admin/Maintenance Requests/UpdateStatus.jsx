import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { updateStatus } from '../../../services/maintenanceService';

const UpdateStatus = () => {
  const { id: requestId } = useParams(); // Get request ID from URL params
  const [status, setStatus] = useState(''); // State to manage the selected status
  const navigate = useNavigate();

  const handleUpdateStatus = async () => {
    try {
      // Call the API function to update status
      await updateStatus(requestId, status);

      toast.success('Status updated successfully!');
      navigate('/all-requests'); // Navigate after success (adjust route as needed)
    } catch (error) {
      toast.error(error.message || 'Failed to update status');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Update Maintenance Request Status</h2>

      <div className="mb-4">
        <label htmlFor="status" className="block text-sm font-medium mb-2">Select Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          
          <option value="Pending">pending</option>
          <option value="In Progress">in Progress</option>
          <option value="In Progress">resolved</option>
        </select>
      </div>

      <button
        onClick={handleUpdateStatus}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Update Status
      </button>
    </div>
  );
};

export default UpdateStatus;
