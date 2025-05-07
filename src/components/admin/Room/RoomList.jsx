import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllRooms } from "../../../services/roomService";

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getAllRooms();
        setRooms(data);
        toast.success("Room Fetched Successfully");
      } catch (error) {
        toast.error("Failed to load rooms");
      
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">All Rooms</h2>

      {rooms.length === 0 ? (
        <p>No rooms available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Room Number</th>
                <th className="px-4 py-2 border">Type</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Assigned Resident</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr key={room._id} className="border-t">
                  <td className="px-4 py-2 border">{room.roomNumber}</td>
                  <td className="px-4 py-2 border capitalize">{room.type}</td>
                  <td className="px-4 py-2 border capitalize">{room.status}</td>
                  <td className="px-4 py-2 border">
                    {room.resident ? room.resident.name : "Not assigned"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RoomList;
