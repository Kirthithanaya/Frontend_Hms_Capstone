import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createRoom } from "../../../services/roomService";

const CreateRoom = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    roomNumber: "",
    roomType: "",
    preference: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { roomNumber, roomType, preference } = formData;

    if (!roomNumber || !roomType || !preference) {
      toast.error("All fields are required!");
      return;
    }

    try {
      await createRoom(formData);
      // Simulated API call
      console.log("Creating Room:", formData);
      toast.success("Room created successfully!");
      navigate("/admin/room-allocation");
    } catch (error) {
      toast.error("Failed to create room.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br p-6">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-xl p-8 transition duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Create New Room
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

          {/* Room Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Room Type
            </label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
              required
            >
              <option value="">Select type</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>
          </div>

          {/* Room Preference */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Preference
            </label>
            <select
              name="preference"
              value={formData.preference}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
              required
            >
              <option value="">Select preference</option>
              <option value="ac">non-smoking</option>
              <option value="non-ac">disabled</option>
              <option value="smoking">Smoking</option>
              <option value="non-smoking">quiet</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
            >
              Create Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRoom;
