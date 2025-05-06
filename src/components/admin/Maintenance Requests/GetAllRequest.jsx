import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getAllRequests } from '../../../services/maintenanceService';

const GetAllRequest = () => {
    const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // for redirection

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getAllRequests();
        setRequests(data);
        toast.success('Requests loaded successfully!');
      } catch (err) {
        toast.error('Failed to load requests.');
        console.error('Error fetching maintenance requests:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const handleGoBack = () => {
    navigate('/'); // example redirection to homepage
  };

    return (
        <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">All Maintenance Requests</h2>
        <button
          onClick={handleGoBack}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Back
        </button>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border bg-white rounded-lg shadow-md">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border">Title</th>
                  <th className="px-4 py-2 border">Description</th>
                  <th className="px-4 py-2 border">Priority</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">Resident</th>
                  <th className="px-4 py-2 border">Created</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req) => (
                  <tr key={req._id}>
                    <td className="border px-4 py-2">{req.title}</td>
                    <td className="border px-4 py-2">{req.description}</td>
                    <td className="border px-4 py-2">{req.priority}</td>
                    <td className="border px-4 py-2">{req.status}</td>
                    <td className="border px-4 py-2">{req.residentId?.name || 'N/A'}</td>
                    <td className="border px-4 py-2">
                      {new Date(req.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
};

export default GetAllRequest;