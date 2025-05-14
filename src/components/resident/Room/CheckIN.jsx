import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { checkInResident } from '../../../services/roomService';


const CheckIN = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [residentId, setResidentId] = useState('');
  const navigate = useNavigate();

  const handleCheckIn = async (e) => {
    e.preventDefault();

    try {
      await checkInResident(roomNumber, residentId);
      toast.success('✅ Check-in successful!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(`❌ ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Resident Check-In</h2>
      <form onSubmit={handleCheckIn} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Room Number</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Resident ID</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={residentId}
            onChange={(e) => setResidentId(e.target.value)}
            required
          />
        </div>
        <button className="w-full bg-blue-600 text-white p-2 rounded">Check In</button>
      </form>
    </div>
  );
};

export default CheckIN;
