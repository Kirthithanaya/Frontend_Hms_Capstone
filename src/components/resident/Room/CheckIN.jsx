import React, { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";       // For notifications
import { checkInResident } from "../../../services/roomService";

const CheckIN = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [residentId, setResidentId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await checkInResident({ roomNumber, residentId });
      toast.success("Resident checked in successfully!");
      navigate("/room-allocations");
    } catch (error) {
      toast.error(error.message || "Failed to check in resident.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-sm font-medium">Room Number</label>
        <input
          type="text"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Resident ID</label>
        <input
          type="text"
          value={residentId}
          onChange={(e) => setResidentId(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Check In
      </button>
    </form>
  );
};

export default CheckIN;
