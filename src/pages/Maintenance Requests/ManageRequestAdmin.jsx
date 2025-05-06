import React, { useState } from 'react';
import GetAllRequest from './../../components/admin/Maintenance Requests/GetAllRequest';
import AssignRequest from '../../components/admin/Maintenance Requests/AssignRequest';
import UpdateStatus from './../../components/admin/Maintenance Requests/UpdateStatus';


const ManageRequestAdmin = () => {
    const [refresh, setRefresh] = useState(false);
            
              const refreshMaintenance = () => {
                setRefresh(!refresh); // Toggle to refresh room list
              };
    return (
        <div className="p-6 max-w-6xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text text-blue-500 text-center mb-6">Maintenance Request</h2>
          
        </div>
          
        <GetAllRequest refreshRooms={refreshMaintenance} />
        <AssignRequest refreshRooms={refreshMaintenance} />
        <UpdateStatus refreshRooms={refreshMaintenance} />
        </div>
    );
};

export default ManageRequestAdmin;