import { useState } from "react";
import CheckIN from "../../components/resident/Room/CheckIN";
import CheckOut from "../../components/resident/Room/CheckOut";







const CheckInOutRoom = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshRooms = () => {
    setRefresh(!refresh); // Toggle to refresh room list
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
    <div>
      <h2 className="text-4xl font-bold text text-blue-500 text-center mb-6">Check In Out Room</h2>
      
    </div>
      
      
  {/* Chechin Room Component */}
  <CheckIN refreshRooms={refreshRooms} />
      
      {/*Check Out Rooms Component */}
      <CheckOut refreshRooms={refresh} />
       
    </div>
  );
};

export default CheckInOutRoom;
