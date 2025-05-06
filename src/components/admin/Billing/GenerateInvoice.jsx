import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllResidents } from "../../../services/residentService";
import { generateInvoice } from "../../../services/billingservice";

const GenerateInvoice = () => {
  const [invoiceData, setInvoiceData] = useState({
    resident: "",
    roomFee: "",
    utilities: "",
    services: "",
    discount: "",
    lateFee: "",
    paymentMethod: "Cash",
  });

  const [residents, setResidents] = useState([]);
  const navigate = useNavigate();

  // Fetch residents on mount
  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const res = await getAllResidents();
        setResidents(res); // Assume array of resident objects
      } catch (err) {
        toast.error("Failed to load residents.");
        console.error(err);
      }
    };
    fetchResidents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await generateInvoice(invoiceData);
      toast.success("Invoice generated successfully!");
      navigate("/invoices");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to generate invoice."
      );
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-6 text-center">
        Generate Invoice
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="resident"
          value={invoiceData.resident}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        >
          <option value="">Select Resident</option>
          {residents.map((res) => (
            <option key={res._id} value={res._id}>
              {res.name} ({res._id})
            </option>
          ))}
        </select>

        <input
          type="number"
          name="roomFee"
          placeholder="Room Fee"
          value={invoiceData.roomFee}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="number"
          name="utilities"
          placeholder="Utilities"
          value={invoiceData.utilities}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="number"
          name="services"
          placeholder="Services"
          value={invoiceData.services}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="number"
          name="discount"
          placeholder="Discount"
          value={invoiceData.discount}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="number"
          name="lateFee"
          placeholder="Late Fee"
          value={invoiceData.lateFee}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <select
          name="paymentMethod"
          value={invoiceData.paymentMethod}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="Cash">Cash</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Online">Online</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Generate Invoice
        </button>
      </form>
    </div>
  );
};

export default GenerateInvoice;
