import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { getAllUsers } from "../../../services/userService";

const GetAllUser = () => {
    const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
        toast.success("Users fetched successfully!");
      } catch (error) {
        toast.error("Failed to fetch users.");
      }
    };

    fetchUsers();
  }, []);

  const handleBack = () => {
    navigate("/admin-dashboard");
  };

    return (
        <div className="p-6">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">User Roles & Permissions</h2>
      {users.length > 0 ? (
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4 capitalize">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading users...</p>
      )}

      <button
        onClick={handleBack}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Dashboard
      </button>
    </div>
    );
};

export default GetAllUser;