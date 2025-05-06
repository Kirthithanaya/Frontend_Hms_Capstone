import React, { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { sendNotification } from "../../../services/notificationService";

const SendNotification = () => {
  const [userId, setUserId] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("email"); // email, sms, in-app
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { userId, subject, message, type };
      await sendNotification(payload);
      toast.success("Notification sent successfully!");
      navigate("/notifications");
    } catch (error) {
      toast.error(error.message || "Failed to send notification");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Send Notification</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        >
          <option value="email">Email</option>
          <option value="sms">SMS</option>
          <option value="in-app">In-App</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Send Notification
        </button>
      </form>
    </div>
  );
};

export default SendNotification;
