// services/integrationService.js
import api from "./api";

// Send email with provided data
export const sendEmail = async ({ email, message }) => {
  try {
    const response = await api.post("/integration/send-email", { email, message });
    return response.data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error.response?.data || error;
  }
};
