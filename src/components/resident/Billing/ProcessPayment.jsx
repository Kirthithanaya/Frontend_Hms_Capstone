import React, { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { processPayment } from "../../../services/billingservice";

const ProcessPayment = () => {
  const [billId, setBillId] = useState("");
  const [method, setMethod] = useState("Cash");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!billId || !method) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      await processPayment({ residentId, method });
      toast.success("✅ Payment processed successfully");
      navigate("/billing/history");
    } catch (error) {
      console.log(error);
      toast.error("❌ Payment processing failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">Process Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1"> billId</label>
          <input
            type="text"
            value={billId}
            onChange={(e) => setBillId(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="EnterBill ID"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Payment Method
          </label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="Cash">Cash</option>
            <option value="Card">Stripe</option>
            <option value="UPI">PayPal</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Process Payment
        </button>
      </form>
    </div>
  );
};

export default ProcessPayment;
