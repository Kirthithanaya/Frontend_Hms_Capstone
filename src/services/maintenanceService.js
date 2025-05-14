// services/maintenanceService.js
import api from "./api"; // Assuming your Axios instance is in api.js

// Create maintenance request function
export const createMaintenanceRequest = async (requestData) => {
  try {
    const response = await api.post("/maintenance/create", requestData); // POST request to /api/maintenance
    return response.data;
  } catch (error) {
    throw error; // Propagate error to frontend
  }
};

// Function to fetch all maintenance requests from the backend

export const getAllRequests = async () => {
  try {
    const response = await api.get("/maintenance/all"); // Call the backend API
    return response.data; // Return the fetched requests
  } catch (error) {
    throw new Error(error.response?.data.message || "Failed to fetch requests");
  }
};

export const assignRequest = async (adminId) => {
  const response = await api.put("/maintenance/assign", { staffId: adminId });
  return response.data;
};









export const updateStatus = (requestId, data) => {
  return api.put(`/maintenance/status/${requestId}`, data);
};
