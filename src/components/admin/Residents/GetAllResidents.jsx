import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getAllResidents } from "../../../services/residentService";

const GetAllResidents = () => {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ✅ useNavigate hook

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const data = await getAllResidents();
        setResidents(data);
        toast.success("✅ Residents loaded successfully");
      } catch (error) {
        toast.error("❌ Failed to fetch residents");
        console.error(error);
        navigate("/error"); // ✅ Redirect to error page on failure
      } finally {
        setLoading(false);
      }
    };

    fetchResidents();
  }, [navigate]);

  const handleRowClick = (residentId) => {
    navigate(`/residents/${residentId}`); // ✅ Navigate to resident details
  };

  if (loading) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-center w-full">All Residents</h2>
        <button
          onClick={() => navigate("/residents/create")}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          + Add Resident
        </button>
      </div>
      {residents.length === 0 ? (
        <p className="text-center">No residents found.</p>
      ) : (
        <table className="w-full text-left border cursor-pointer">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Room</th>
              <th className="p-2 border">Check-In</th>
            </tr>
          </thead>
          <tbody>
            {residents.map((resident) => (
              <tr
                key={resident._id}
                onClick={() => handleRowClick(resident._id)} // ✅ Row click navigation
                className="hover:bg-gray-100 transition"
              >
                <td className="p-2 border">{resident.name}</td>
                <td className="p-2 border">{resident.email}</td>
                <td className="p-2 border">{resident.phone}</td>
                <td className="p-2 border">{resident.roomNumber}</td>
                <td className="p-2 border">
                  {new Date(resident.checkInDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GetAllResidents;
