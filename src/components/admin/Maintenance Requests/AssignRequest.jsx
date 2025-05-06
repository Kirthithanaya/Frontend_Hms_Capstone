import React from 'react';

import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { assignRequest } from '../../../services/maintenanceService';

const AssignRequest = () => {
  const navigate = useNavigate();
  const { id: requestId } = useParams(); // getting request ID from URL
  const adminId = localStorage.getItem('adminId'); // assuming admin ID is stored here

  const handleAssign = async () => {
    try {
      await assignRequest(requestId, adminId);
      toast.success('Request successfully assigned!');
      navigate('/all-requests');
    } catch (error) {
      toast.error(error.message || 'Assignment failed.');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Assign Request</h2>
      <button
        onClick={handleAssign}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Assign to Me (Admin)
      </button>
    </div>
  );
};

export default AssignRequest;
