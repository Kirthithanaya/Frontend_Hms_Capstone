import React, { useState } from 'react';
  // Import sendSMS from notificationService
import { toast } from 'react-toastify';  // For toast notifications
import { useNavigate } from 'react-router-dom';  // To navigate after sending SMS
import { sendSMS } from '../../../services/notificationService';

const SendSMS = () => {
  const [to, setTo] = useState('');  // The recipient's phone number
  const [body, setBody] = useState('');  // The message content
  const navigate = useNavigate();  // Use navigate for redirection

  // Handle the SMS sending process
  const handleSendSMS = async () => {
    if (!to || !body) {
      toast.error('Please fill in both fields!');  // Show error if fields are empty
      return;
    }

    // Call the sendSMS function to send the SMS
    await sendSMS(to, body);

    // After SMS is successfully sent, navigate to notifications page
    navigate('/notifications');  // You can change this to any other page you need
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Send SMS</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="to" className="block text-sm font-medium">
            Recipient's Phone Number
          </label>
          <input
            type="text"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter phone number"
            required
          />
        </div>
        <div>
          <label htmlFor="body" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Enter your message"
            required
          />
        </div>
        <div>
          <button
            type="button"
            onClick={handleSendSMS}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Send SMS
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendSMS;
