import React, { useState } from 'react';
import ResidentForm from '../../components/admin/Residents/ResidentForm';
import GetAllResidents from './../../components/admin/Residents/GetAllResidents';
import GetResidentById from './../../components/admin/Residents/GetResidentById';
import UpdateResident from './../../components/admin/Residents/UpdateResident';
import DeleteResident from './../../components/admin/Residents/DeleteResident';

const ResidentInfo = () => {
    const [refresh, setRefresh] = useState(false);
    
      const refreshResident = () => {
        setRefresh(!refresh); // Toggle to refresh room list
      };
    return (
        <div className="p-6 max-w-6xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text text-blue-500 text-center mb-6">Check In Out Room</h2>
          
        </div>
          
          
      {/* create resident Component */}
      <ResidentForm refreshRooms={refreshResident} />
          
      <GetAllResidents refreshRooms={refreshResident} />


      <GetResidentById refreshRooms={refreshResident} />
      
      <UpdateResident refreshRooms={refreshResident} />


      <DeleteResident refreshRooms={refreshResident} />
           
        </div>
    );
};

export default ResidentInfo;