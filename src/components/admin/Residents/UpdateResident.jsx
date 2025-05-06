import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getResidentById, updateResident } from "../../../services/residentService";


const UpdateResident = () => {
  const { residentId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    roomNumber: "",
   
    checkOutDate: "",
  });

  useEffect(() => {
    const fetchResident = async () => {
      try {
        const resident = await getResidentById(residentId);
        setFormData({
          name: resident.name || "",
          roomNumber: resident.roomNumber || "",
          
          checkOutDate: resident.checkOutDate?.slice(0, 10) || "",
        });
      } catch (error) {
            
            toast.error("❌ Failed to update resident");
          }
    };

    fetchResident();
  }, [residentId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateResident(id, formData);
      console.log("Fetched ID:", id); // Must not be "undefined"
      toast.success("✅ Resident updated successfully");
      navigate(`/residents/${id}`);
    } catch (error) {
      toast.error("❌ Failed to update resident");
      console.error("Update error:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Resident</h2>
      <form onSubmit={handleUpdate} className="space-y-4">

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="roomNumber"
          type="text"
          placeholder="Room Number"
          value={formData.roomNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="checkInDate"
          type="date"
          value={formData.checkInDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="checkOutDate"
          type="date"
          value={formData.checkOutDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
        >
          Update Resident
        </button>
      </form>
    </div>
  );
};

export default UpdateResident
