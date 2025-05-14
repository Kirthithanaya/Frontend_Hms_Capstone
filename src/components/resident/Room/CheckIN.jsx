import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { checkInResident } from "../../../services/roomService";


const CheckIN = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    roomNumber: "",
    residentId: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { roomNumber, residentId } = formData;

    if (!roomNumber || !residentId) {
      toast.error("All fields are required!");
      return;
    }

    try {
      await checkInResident(roomNumber, residentId);
      toast.success("Resident checked in successfully!");
      navigate("/admin/room-allocation"); // or the appropriate route
    } catch (error) {
      toast.error(error.response?.data?.message || "Check-in failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br p-6">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-xl p-8 transition duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Check In Resident
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Room Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Room Number
            </label>
            <input
              type="text"
              name="roomNumber"
              value={formData.roomNumber}
              onChange={handleChange}
              placeholder="E.g. 101A"
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          {/* Resident ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Resident ID
            </label>
            <input
              type="text"
              name="residentId"
              value={formData.residentId}
              onChange={handleChange}
              placeholder="E.g. 64bc3..."
              className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
            >
              Check In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckIN;
