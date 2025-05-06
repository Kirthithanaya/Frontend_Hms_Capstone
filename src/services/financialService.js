import api from "./api";

// Create a new payment
export const createPayment = async (paymentData) => {
  try {
    const response = await api.post("/financial/payment", paymentData);
    return response.data;
  } catch (error) {
    console.error("Error creating payment:", error);
    throw error.response?.data || error;
  }
};


// Get all payments
export const getPayments = async () => {
    try {
      const response = await api.get("/financial/payments");
      return response.data;
    } catch (error) {
      console.error("Error fetching payments:", error);
      throw error.response?.data || error;
    }
  };


  // Create an expense
export const createExpense = async (expenseData) => {
    try {
      const response = await api.post("/financial/expense", expenseData); // Send POST request to backend
      return response.data; // Return the response data
    } catch (error) {
      console.error("Error creating expense:", error); // Log error in case of failure
      throw error.response?.data || error; // Throw error response if available
    }
  };



 

// Get all expenses
export const getExpenses = async () => {
  try {
    const response = await api.get("/financial/expenses");
    return response.data; // Return the list of expenses
  } catch (error) {
    console.error("Error fetching expenses:", error);
    throw error.response?.data || error; // Propagate error if something goes wrong
  }
}


// Get overview financial data (e.g., revenue, expenses, occupancy rate)
export const getOverviewReport = async () => {
    try {
      const response = await api.get("/financial/overview"); // Send GET request to the backend API
      return response.data; // Return the overview data
    } catch (error) {
      console.error("Error fetching overview report:", error);
      throw error.response?.data || error; // Propagate error if there's an issue
    }
  };


  // Get monthly financial trends
export const getMonthlyTrends = async () => {
    try {
      const response = await api.get("/financial/trends");
      return response.data;
    } catch (error) {
      console.error("Error fetching monthly trends:", error);
      throw error.response?.data || error;
    }
  };