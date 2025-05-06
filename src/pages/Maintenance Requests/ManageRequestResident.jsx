import React, { useState } from 'react';
import CreateRequest from '../../components/resident/Maintenance Requests/CreateRequest';







const ManageRequestResident = () => {
     const [refresh, setRefresh] = useState(false);
        
          const refreshMaintenance = () => {
            setRefresh(!refresh); // Toggle to refresh room list
          };
    return (
        <div className="p-6 max-w-6xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text text-blue-500 text-center mb-6">Maintenance Request</h2>
          
        </div>
          
        <CreateRequest refreshRooms={refreshMaintenance} />
    
       
           
        </div>
    );
};

export default ManageRequestResident;