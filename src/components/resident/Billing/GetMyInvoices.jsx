import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getMyInvoices } from "../../../services/billingservice";

const GetMyInvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // initialize navigation

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const data = await getMyInvoices();
        setInvoices(data);
      } catch (error) {
        toast.error("Failed to fetch invoices");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  // Navigate to details (example route)
  const handleViewDetails = (invoiceId) => {
    navigate(`/invoice/${invoiceId}`);
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl  text-center  font-bold mb-4">My Invoices</h2>

      {loading ? (
        <p>Loading...</p>
      ) : invoices.length === 0 ? (
        <p className="text-center">No invoices found.</p>
      ) : (
        <table className="min-w-full border text-sm bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-600 uppercase">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice._id} className="text-center border-t">
                <td className="p-3">{new Date(invoice.createdAt).toLocaleDateString()}</td>
                <td className="p-3 font-semibold">₹{invoice.totalAmount}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      invoice.status === "Paid"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => handleViewDetails(invoice._id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
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

export default GetMyInvoices;