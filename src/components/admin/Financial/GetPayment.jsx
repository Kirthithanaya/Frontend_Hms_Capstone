import React, { useEffect, useState } from "react";

import { toast, ToastContainer } from "react-toastify"; // For showing toast notifications
import { useNavigate } from "react-router-dom"; // For navigation if needed
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import { getPayments } from "../../../services/financialService";

const GetPayment = () => {
    const [payments, setPayments] = useState([]);
    const navigate = useNavigate(); // Initialize the navigate function
  
    useEffect(() => {
      const fetchPayments = async () => {
        try {
          const data = await getPayments(); // Fetch payments from the API
          setPayments(data); // Update the state with the fetched data
          toast.success("Payments loaded successfully!"); // Show success toast when payments are fetched
        } catch (error) {
          toast.error("Failed to load payments."); // Show error toast if the API request fails
        }
      };
  
      fetchPayments(); // Call the fetchPayments function when the component mounts
    }, []); 
    return (
        <div className="p-6">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Payments List</h2>

      {/* Button to navigate to the Create Payment page */}
      <button
        onClick={() => navigate("/create-payment")}
        className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4"
      >
        Create New Payment
      </button>

      {/* Payments Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-md shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border">#</th>
              <th className="p-3 border">Resident ID</th>
              <th className="p-3 border">Amount</th>
              <th className="p-3 border">Method</th>
              <th className="p-3 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.length > 0 ? (
              payments.map((payment, index) => (
                <tr key={payment._id} className="text-center hover:bg-gray-100">
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{payment.residentId}</td>
                  <td className="p-3 border">₹{payment.amount}</td>
                  <td className="p-3 border">{payment.method}</td>
                  <td className="p-3 border">
                    {new Date(payment.createdAt).toLocaleDateString()} {/* Format date */}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No payments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetPayment;