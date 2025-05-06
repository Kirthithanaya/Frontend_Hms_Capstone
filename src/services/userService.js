// services/userService.js
import api from "./api";

// Get all users (Admin only)
export const getAllUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error.response?.data || error;
  }
};



// Update a user's role
export const updateUserRole = async (userId, role) => {
    try {
      const response = await api.put(`/users/${userId}/role`, { role });
      return response.data;
    } catch (error) {
      console.error("Error updating user role:", error);
      throw error.response?.data || error;
    }
  };


  // Delete a user by ID
export const deleteUser = async (userId) => {
    const response = await api.delete(`/users/${userId}`);
    return response.data;
  };