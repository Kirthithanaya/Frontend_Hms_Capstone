import React, { useState } from 'react';
import SendNotification from '../../components/admin/Notification/SendNotification';
import SendSMS from './../../components/admin/Notification/SendSMS';


const SendNotificationAdmin = () => {
    const [refresh, setRefresh] = useState(false);
        
          const refreshNotification = () => {
            setRefresh(!refresh); // Toggle to refresh room list
          };
    return (
        <div className="p-6 max-w-6xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text text-blue-500 text-center mb-6">Send Notification</h2>
          
        </div>
          
          
      {/* create resident Component */}
      <SendNotification refreshRooms={refreshNotification} />
          
      <SendSMS refreshRooms={refreshNotification} />
           
        </div>
    );
};

export default SendNotificationAdmin;