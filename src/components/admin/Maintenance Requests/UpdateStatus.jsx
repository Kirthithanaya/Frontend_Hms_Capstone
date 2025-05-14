import  { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateStatus } from '../../../services/maintenanceService';

const UpdateStatus = () => {
  const { id: requestId } = useParams(); // Get requestId from URL
  const navigate = useNavigate(); // For redirection

  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdateStatus = async () => {
    if (!status || !message) {
      toast.error('Please select a status and enter a message.');
      return;
    }

    try {
      await updateStatus(requestId, { status, message });

      toast.success('Status updated successfully!');
      navigate('/all-requests'); // Redirect after success
    } catch (error) {
      toast.error(
        error.response?.data?.error || 'Failed to update status. Please try again.'
      );
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Update Maintenance Request Status</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Select Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Select Status --</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="3"
          className="w-full p-2 border rounded"
          placeholder="Enter update message"
        />
      </div>

      <button
        onClick={handleUpdateStatus}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Update Status
      </button>
    </div>
  );
};

export default UpdateStatus;
