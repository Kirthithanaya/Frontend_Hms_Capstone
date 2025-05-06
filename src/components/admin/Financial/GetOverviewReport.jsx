import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify"; // Importing Toastify for success/error messages
import { useNavigate } from "react-router-dom"; // Importing navigate for routing
import "react-toastify/dist/ReactToastify.css"; // Importing Toastify CSS styles
import { getOverviewReport } from "../../../services/financialService";

const GetOverviewReport = () => {
    const [overviewData, setOverviewData] = useState(null); // State to store overview data
  const navigate = useNavigate(); // Initialize the navigate function for routing

  useEffect(() => {
    // Fetch overview report when the component mounts
    const fetchOverviewReport = async () => {
      try {
        const data = await getOverviewReport(); // Fetch data from API
        setOverviewData(data); // Store fetched data in the state
        toast.success("Overview report fetched successfully!"); // Show success toast
      } catch (error) {
        toast.error("Error fetching overview report!"); // Show error toast if there's a problem
      }
    };

    fetchOverviewReport(); // Call the function to fetch data
  }, []); // Empty dependency array, meaning it will run only once on mount

  const handleViewDetails = () => {
    // If you want to navigate to a details page, for example:
    navigate("/overview/details");
  };
    return (
        <div className="p-6">
        {/* Toast container for displaying toasts */}
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
  
        <h2 className="text-2xl font-bold mb-4">Financial Overview Report</h2>
  
        {/* Render the overview data */}
        {overviewData ? (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Total Revenue</h3>
              <p>{overviewData.totalRevenue}</p>
            </div>
  
            <div>
              <h3 className="font-semibold">Total Expenses</h3>
              <p>{overviewData.totalExpenses}</p>
            </div>
  
            <div>
              <h3 className="font-semibold">Occupancy Rate</h3>
              <p>{overviewData.occupancyRate}%</p>
            </div>
  
            <button
              onClick={handleViewDetails}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              View Detailed Report
            </button>
          </div>
        ) : (
          <p>Loading financial overview...</p> // Show a loading message while the data is being fetched
        )}
      </div>
    );
};

export default GetOverviewReport;