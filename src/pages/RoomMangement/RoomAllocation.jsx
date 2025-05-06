import { useState } from "react";

import AssignRoom from './../../components/admin/Room/AssignRoom';
import CreateRoom from "../../components/admin/room/CreateRoom";
import RoomList from './../../components/admin/Room/RoomList';








const RoomAllocation = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshRooms = () => {
    setRefresh(!refresh); // Toggle to refresh room list
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
    <div>
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-6">Room allocation</h2>
      
    </div>
      
      {/* Create Room Component */}
      <CreateRoom refreshRooms={refreshRooms} />
      
    {/* Get All Rooms Component */}
    < RoomList refreshRooms={refresh} />
    {/* Assign Room Component */}
    <AssignRoom refreshRooms={refresh} />
  
       
    </div>
  );
};

export default RoomAllocation
