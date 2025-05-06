import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { deleteUser, getAllUsers, updateUserRole } from "../../../services/userService";

const UpdateUserRole = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        toast.error("Failed to fetch users.");
      }
    };

    fetchUsers();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    try {
      await updateUserRole(userId, newRole);
      toast.success("User role updated successfully!");
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, role: newRole } : user
        )
      );
    } catch (error) {
      toast.error("Failed to update user role.");
    }
  };

  const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await deleteUser(userId);
      toast.success("User deleted successfully!");
      setUsers((prev) => prev.filter((user) => user._id !== userId));

      // Optional: redirect after deletion
      // navigate("/admin/users");
    } catch (error) {
      toast.error("Failed to delete user.");
    }
  };

  return (
    <div className="p-6">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">User Role Management</h2>

      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Current Role</th>
            <th className="px-4 py-2 border">Update Role</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="text-center">
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.role}</td>
              <td className="px-4 py-2 border">
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user._id, e.target.value)}
                  className="border p-1 rounded"
                >
                  <option value="admin">Admin</option>
                  <option value="staff">Staff</option>
                  <option value="resident">Resident</option>
                </select>
              </td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => handleDelete(user._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateUserRole
