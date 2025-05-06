import api from "./api"; // Custom Axios instance with token handling

// ✅ Get all residents
export const getAllResidents = async () => {
  const response = await api.get("/residents/get-all");
  return response.data;
};

// ✅ Get a specific resident by ID
export const getResidentById = async (residentId) => {
  const response = await api.get(`/residents/${residentId}`);
  return response.data;
};

// ✅ Create a new resident
export const createResident = async (residentData) => {
  const response = await api.post("/residents/create", residentData);
  return response.data;
};

// ✅ Update resident details
export const updateResident = async (residentId, updateData) => {
  const response = await api.put(`/residents/update/${residentId}`, updateData);
  return response.data;
};

// ✅ Delete a resident
export const deleteResident = async (residentId) => {
  const response = await api.delete(`/residents/delete/${residentId}`);
  return response.data;
};
