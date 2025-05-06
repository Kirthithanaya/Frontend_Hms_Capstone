import React, { useState } from 'react';
import CreatePayment from '../../components/admin/Financial/CreatePayment';
import GetPayment from '../../components/admin/Financial/GetPayment';
import CreateExpense from '../../components/admin/Financial/CreateExpense';
import GetExpenses from '../../components/admin/Financial/GetExpenses';
import GetOverviewReport from '../../components/admin/Financial/GetOverviewReport';
import GetMonthlyTrends from '../../components/admin/Financial/GetMonthlyTrends';

const FinancialAdmin = () => {
  const [refresh, setRefresh] = useState(false);
      
        const refreshFinancial = () => {
          setRefresh(!refresh); // Toggle to refresh room list
        };
  return (
    <div className="p-6 max-w-6xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text text-blue-500 text-center mb-6">FinanCial Reports</h2>
          
        </div> 
      {/* create resident Component */}
      <CreatePayment refreshRooms={refreshFinancial} />
      <GetPayment refreshRooms={refreshFinancial} />

      <CreateExpense refreshRooms={refreshFinancial} />
      <GetExpenses refreshRooms={refreshFinancial} />

      <GetOverviewReport refreshRooms={refreshFinancial} />
      <GetMonthlyTrends refreshRooms={refreshFinancial} />
        </div>
  );
};

export default FinancialAdmin;