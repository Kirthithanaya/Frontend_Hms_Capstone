
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Importing toastify
import { useNavigate } from "react-router-dom"; // Importing navigate for routing
import "react-toastify/dist/ReactToastify.css"; // Importing Toastify CSS styles
import { createExpense } from '../../../services/financialService';

const CreateExpense = () => {
    const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function to navigate to the list of expenses

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the expense data from form inputs
    const expenseData = { category, description, amount };

    try {
      // Attempt to create the expense by calling the API
      await createExpense(expenseData); // Assuming createExpense is an API call
      toast.success("Expense created successfully!"); // Show success toast notification
      navigate("/expenses"); // Redirect to the expense list page after successful creation
    } catch (error) {
      toast.error("Error creating expense!"); // Show error toast notification if there is an error
    }
  };
    return (
        <div className="p-6">
        {/* Toast container to display toasts */}
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
  
        <h2 className="text-2xl font-bold mb-4">Create Expense</h2>
  
        {/* Expense Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category Input */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
  
          {/* Description Input */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
  
          {/* Amount Input */}
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Create Expense
          </button>
        </form>
      </div>
    );
};

export default CreateExpense;