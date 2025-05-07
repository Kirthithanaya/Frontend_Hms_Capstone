import axios from "axios";

// Create an Axios instance with a base URL for all the API requests
const api = axios.create({
  baseURL: "https://backend-hms-capstone-6.onrender.com/api", // Replace this with your backend API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercept requests to attach the Authorization token (JWT) if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach the token to the headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optionally: Intercept responses to handle errors globally (e.g., 401 Unauthorized)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token is invalid or expired, log the user out
      localStorage.removeItem("token");
      window.location.href = "/login"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default api;
