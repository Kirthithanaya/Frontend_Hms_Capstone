import React, { useState } from 'react';
import SendEmail from '../../components/admin/Integration and DataManage/SendEmail';

const SendEmailAdmin = () => {
      const [refresh, setRefresh] = useState(false);
        
          const refreshSendEmail = () => {
            setRefresh(!refresh); // Toggle to refresh room list
          };
    return (
        <div className="p-6 max-w-6xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text text-blue-500 text-center mb-6">Send Email</h2>
          
        </div>
          
          
      {/* create resident Component */}
      <SendEmail refreshRooms={refreshSendEmail} />
          
      
           
        </div>
    );
};

export default SendEmailAdmin;