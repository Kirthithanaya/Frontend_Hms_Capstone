// src/components/Maintenance/AssignRequest.jsx
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { assignRequest } from '../../../services/maintenanceService';


const AssignRequest = () => {
  const { requestId } = useParams(); // Used internally only
  const [staffId, setStaffId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await assignRequest(requestId, staffId); // Call API
      toast.success('Maintenance request assigned successfully!');
      navigate('/maintenance'); // Redirect after success
    } catch (error) {
      toast.error('Failed to assign request.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Assign Maintenance Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Staff ID</label>
          <input
            type="text"
            value={staffId}
            onChange={(e) => setStaffId(e.target.value)}
            placeholder="Enter Staff ID"
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Assign Request
        </button>
      </form>
    </div>
  );
};

export default AssignRequest;
