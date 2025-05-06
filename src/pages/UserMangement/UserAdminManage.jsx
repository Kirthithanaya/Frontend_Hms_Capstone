import React, { useState } from 'react';
import GetAllUser from '../../components/admin/UserMangement/GetAllUser';
import UpdateUserRole from '../../components/admin/UserMangement/UpdateUserRole';

const UserAdminManage = () => {
     const [refresh, setRefresh] = useState(false);
        
          const refreshUser = () => {
            setRefresh(!refresh); // Toggle to refresh room list
          };
    return (
        <div className="p-6 max-w-6xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text text-blue-500 text-center mb-6">User Role And Permissions</h2>
          
        </div>
          
          
      {/* create resident Component */}
      <GetAllUser refreshRooms={refreshUser} />
          
      <UpdateUserRole refreshRooms={refreshUser} />
           
        </div>
    );
};

export default UserAdminManage;