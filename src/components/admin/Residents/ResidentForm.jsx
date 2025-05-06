import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { createResident } from "../../../services/residentService";

const ResidentForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    roomNumber: "",
    checkInDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createResident(formData);
      toast.success("✅ Resident created successfully");
      navigate("/residents");
    } catch (error) {
      console.error("Error creating resident:", error);
      toast.error("❌ Failed to create resident");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Resident</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

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
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
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

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Create Resident
        </button>
      </form>
    </div>
  );
};

export default ResidentForm;