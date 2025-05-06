
import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getPaymentHistory } from "../../../services/billingservice";


const GetPaymentHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getPaymentHistory();
        setHistory(data);
        toast.success("✅ Payment history loaded successfully");
      } catch (error) {
        console.error(error);
        toast.error("❌ Failed to load payment history");
        navigate("/error"); // redirect if desired
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [navigate]);

  if (loading) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 bg-white shadow rounded">
      <h2 className="text-2xl  text-centerfont-bold mb-4">Payment History</h2>
      {history.length === 0 ? (
        <p className="text-center mt-5">No payment history available.</p>
      ) : (
        <table className="min-w-full text-left border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Method</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((payment) => (
              <tr key={payment._id}>
                <td className="p-2 border">{new Date(payment.date).toLocaleDateString()}</td>
                <td className="p-2 border">₹{payment.amount}</td>
                <td className="p-2 border">{payment.method}</td>
                <td className="p-2 border">{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GetPaymentHistory;