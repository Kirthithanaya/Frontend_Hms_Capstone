import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getAllInvoices } from "../../../services/billingservice";

const GetAllInvoices = () => {
 
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ✅ initialize navigation

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const data = await getAllInvoices();
        setInvoices(data);
      } catch (error) {
        console.error("Failed to fetch invoices", error);
        toast.error("Error fetching invoices.");
      } finally {
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  const handleViewDetails = (invoiceId) => {
    navigate(`/invoice/${invoiceId}`); // ✅ navigate to invoice detail page
  };
  return (
    <div className="p-6">
    <h2 className="text-2xl text-center font-bold mb-4">All Resident Invoices</h2>

    {loading ? (
      <p>Loading...</p>
    ) : invoices.length === 0 ? (
      <p className="text-center ">No invoices available.</p>
    ) : (
      <table className="w-full text-sm border-collapse border">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="border px-4 py-2">Resident</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Room Fee</th>
            <th className="border px-4 py-2">Total</th>
            <th className="border px-4 py-2">Payment</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice._id} className="text-center">
              <td className="border px-4 py-2">{invoice.resident?.name || "N/A"}</td>
              <td className="border px-4 py-2">
                {new Date(invoice.createdAt).toLocaleDateString()}
              </td>
              <td className="border px-4 py-2">₹{invoice.roomFee}</td>
              <td className="border px-4 py-2 font-bold">₹{invoice.totalAmount}</td>
              <td className="border px-4 py-2">{invoice.paymentMethod}</td>
              <td className="border px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    invoice.status === "Paid"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {invoice.status}
                </span>
              </td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleViewDetails(invoice._id)}
                  className="text-blue-600 hover:underline"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
  );
};

export default GetAllInvoices;