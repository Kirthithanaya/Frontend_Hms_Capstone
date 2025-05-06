import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createPayment } from "../../../services/financialService";

const CreatePayment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    residentId: "",
    amount: "",
    method: "Cash",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createPayment(formData);
      toast.success("Payment created successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/payments"); // Redirect to payments or desired page
      }, 2500);
    } catch (error) {
      toast.error(error.message || "Failed to create payment.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold">Create Payment</h2>

        <input
          type="text"
          name="residentId"
          placeholder="Resident ID"
          value={formData.residentId}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />

        <select
          name="method"
          value={formData.method}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="Cash">Stripe</option>
          <option value="Card">Paypal</option>
          <option value="Online">Cash</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default CreatePayment;
