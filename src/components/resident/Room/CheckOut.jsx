import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { checkOutResident } from "../../../services/roomService";

const CheckOut = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await checkOutResident({ roomNumber });
      toast.success("Resident checked out successfully!");
      navigate("/room-allocations");
    } catch (error) {
      toast.error(error.message || "Failed to check out resident.");
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

    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
      Check Out
    </button>
  </form>
  );
};

export default CheckOut;
