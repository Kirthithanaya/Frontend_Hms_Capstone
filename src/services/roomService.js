import api from "./api"; // Importing your custom axios instance

// ✅ Create a new room
export const createRoom = async (roomData) => {
  const response = await api.post("/rooms/create-room", roomData);
  return response.data;
};

// ✅ Get all rooms
export const getAllRooms = async () => {
  const response = await api.get("/rooms/get-all-rooms");
  return response.data;
};

// ✅ Assign a room to a resident
export const assignRoom = async (roomnumber, residentId) => {
  const response = await api.put(`/rooms/assign-room/${roomnumber}`, {
    residentId,
  });
  return response.data;
};



// ✅ Check-in Resident API call
export const checkInResident = async (roomNumber, residentId) => {
  try {
    const response = await api.post('/rooms/check-in', {
      roomNumber,
      residentId,
    });

    return response.data; // { message: 'Check-in successful' }
  } catch (error) {
    // Forward error for toast or component handling
    const message = error.response?.data?.message || 'Check-in failed';
    throw new Error(message);
  }
};


// services/checkoutService.js

export const checkOutResident = async ({ roomNumber }) => {
  try {
    const response = await api.post("/rooms/check-out", { roomNumber });
    return response.data;
  } catch (error) {
    console.error("Error during check-out:", error);
    throw error.response?.data || error;
  }
};

// ✅ Check-out a resident from a room
export const checkOut = async (roomId) => {
  const response = await api.put(`/rooms/check-out/${roomId}`);
  return response.data;
};

// ✅ Delete a room
export const deleteRoom = async (roomId) => {
  const response = await api.delete(`/rooms/${roomId}`);
  return response.data;
};
