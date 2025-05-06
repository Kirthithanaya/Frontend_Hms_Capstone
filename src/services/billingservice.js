import api from "./api"; // Axios instance with base URL and headers

// Generate a new invoice
export const generateInvoice = async (invoiceData) => {
  const response = await api.post("/billing/generate", invoiceData);
  return response.data;
};

// ✅ Get invoices for the currently logged-in resident
export const getMyInvoices = async () => {
    const response = await api.get("/billing/my");
    return response.data;
  };

  
export const getAllInvoices = async () => {
    const response = await api.get("/billing/all");
    return response.data;
  };

  export const processPayment = async (billId, paymentMethod) => {
    const response = await api.post(`/billing/pay`, {
      billId,
      paymentMethod,
    });
    return response.data;
  };


  export const getPaymentHistory = async () => {
    const response = await api.get("/billing/history");
    return response.data;
  };


  export const deleteInvoice = async (invoiceId) => {
    try {
      const response = await api.delete(`/invoices/delete/${invoiceId}`);
      return response.data; // Return the deleted invoice details (optional)
    } catch (error) {
      throw new Error(error.response?.data.message || 'Failed to delete invoice');
    }
  };
  