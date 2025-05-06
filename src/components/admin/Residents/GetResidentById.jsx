import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { toast } from 'react-toastify'; // Import toast for notifications
import { getResidentById } from '../../../services/residentService';


const GetResidentById = ({ residentId }) => {
    const [resident, setResident] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchResidentData = async () => {
      try {
        const data = await getResidentById(residentId); // Call the service to get resident data
        setResident(data);
        toast.success('Resident details fetched successfully!'); // Show success toast
      } catch (err) {
        setError('Failed to fetch resident details');
        toast.error('Error fetching resident details'); // Show error toast
      } finally {
        setLoading(false);
      }
    };

    fetchResidentData();
  }, [residentId]);

  const handleNavigate = () => {
    // Navigate to a different page after an action, for example, go back to the resident list
    navigate('/residents');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

    return (
        <div className="resident-details">
      {resident && (
        <div>
          <h2>{resident.name}</h2>
          <p><strong>Email:</strong> {resident.email}</p>
          <p><strong>Phone:</strong> {resident.phone}</p>
          <p><strong>Room:</strong> {resident.room}</p>
          <p><strong>Check-in Date:</strong> {resident.checkInDate}</p>

          {/* Button to navigate back to the residents list */}
          <button 
            onClick={handleNavigate} 
            className="bg-blue-500 text-white p-2 rounded"
          >
            Back to Residents
          </button>
        </div>
      )}
    </div>
    );
};

export default GetResidentById;