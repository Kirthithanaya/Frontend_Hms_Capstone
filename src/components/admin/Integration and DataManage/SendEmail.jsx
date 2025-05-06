import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { sendEmail } from "../../../services/integrationService";

const SendEmail = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !message) {
      toast.error("Please fill in both fields.");
      return;
    }

    try {
      await sendEmail({ email, message });
      toast.success("Email sent successfully!");
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error) {
      toast.error(error.message || "Failed to send email.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow rounded">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Send Email</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Recipient Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 border rounded"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default SendEmail;
