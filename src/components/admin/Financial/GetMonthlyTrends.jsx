import React, { useEffect, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import "react-toastify/dist/ReactToastify.css";
import { getMonthlyTrends } from "../../../services/financialService";

const GetMonthlyTrends = () => {
    const [trends, setTrends] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchTrends = async () => {
        try {
          const data = await getMonthlyTrends();
          setTrends(data);
          toast.success("Monthly trends fetched successfully!");
        } catch (error) {
          toast.error("Failed to fetch monthly trends.");
        }
      };
  
      fetchTrends();
    }, []);
  
    const handleBack = () => {
      navigate("/financial-overview");
    };
  
    return (
        <div className="p-6">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Monthly Financial Trends</h2>

      {trends.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={trends}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#4ade80" />
            <Bar dataKey="expenses" fill="#f87171" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>Loading monthly trends...</p>
      )}

      <button
        onClick={handleBack}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Overview
      </button>
    </div>
    );
};

export default GetMonthlyTrends;