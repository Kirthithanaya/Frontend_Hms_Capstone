import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AssignRoom = ({ onAssign }) => {
  const [roomNumber, setRoomNumber] = useState('');
  const [residentID, setResidentID] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!roomNumber || !residentID) {
      toast.error('❌ Please provide both Room Number and Resident ID');
      return;
    }

    const assignment = {
      roomNumber,
      residentID,
    };

    onAssign(assignment); // Call parent handler to perform assignment
    toast.success('✅ Room assigned successfully!');

    // Reset form
    setRoomNumber('');
    setResidentID('');
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Assign Room to Resident</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Room Number */}
        <div>
          <label className="block mb-1 font-medium">Room Number</label>
          <input
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., 101A"
          />
        </div>

        {/* Resident ID */}
        <div>
          <label className="block mb-1 font-medium">Resident ID</label>
          <input
            type="text"
            value={residentID}
            onChange={(e) => setResidentID(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., RES12345"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Assign Room
        </button>
      </form>
    </div>
  );
};

export default AssignRoom;
