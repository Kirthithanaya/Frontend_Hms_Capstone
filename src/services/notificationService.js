import api from './api'; // Import the configured Axios instance





// services/sendNotificationService.js


export const sendNotification = async ({ userId, subject, message, type }) => {
  try {
    const response = await api.post("/notifications/send", {
      userId,
      subject,
      message,
      type,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};




//Function to send SMS notification


export const sendSMS = async (to, body) => {
  try {
    // Sending the SMS notification request
    const response = await api.post('/sms/send', { to, body });

    // Return the response data (optional, depending on the API response structure)
    return response.data;
  } catch (error) {

    // Optionally: Throw the error response to be handled in the calling function
    throw error.response?.data || error;
  }
};

