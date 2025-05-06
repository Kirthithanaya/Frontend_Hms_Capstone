import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify"; // Importing Toastify
import { useNavigate } from "react-router-dom"; // Importing navigate for routing
import "react-toastify/dist/ReactToastify.css"; // Importing Toastify CSS styles
import { getExpenses } from "../../../services/financialService";

const GetExpenses = () => {
    const [expenses, setExpenses] = useState([]); // State to store the fetched expenses
  const navigate = useNavigate(); // Initialize the navigate function for redirection

  useEffect(() => {
    // Fetch expenses when the component mounts
    const fetchExpenses = async () => {
      try {
        const data = await getExpenses(); // Fetch data from the API
        setExpenses(data); // Store fetched expenses in the state
        toast.success("Expenses fetched successfully!"); // Display success toast
      } catch (error) {
        toast.error("Error fetching expenses!"); // Display error toast in case of failure
      }
    };

    fetchExpenses(); // Call the function to fetch expenses
  }, []);

  const handleExpenseClick = (id) => {
    // Redirect to a detailed page when an expense item is clicked
    navigate(`/expenses/${id}`);
  };

    return (
        <div className="p-6">
      {/* Toast container to display toasts */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />

      <h2 className="text-2xl font-bold mb-4">Expense List</h2>

      {/* Render expenses */}
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Category</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Amount</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <tr key={expense._id}>
                <td className="px-4 py-2 border">{expense.category}</td>
                <td className="px-4 py-2 border">{expense.description}</td>
                <td className="px-4 py-2 border">{expense.amount}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleExpenseClick(expense._id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center px-4 py-2 border">
                No expenses available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    );
};

export default GetExpenses;