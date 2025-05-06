import React, { useState } from 'react';
import GetMyInvoices from '../../components/resident/Billing/GetMyInvoices';
import ProcessPayment from '../../components/resident/Billing/ProcessPayment';
import GetPaymentHistory from '../../components/resident/Billing/GetPaymentHistory';

const GetInvoiceResident = () => {
    const [refresh, setRefresh] = useState(false);
    
      const refreshBilling = () => {
        setRefresh(!refresh); // Toggle to refresh room list
      };
    return (
        <div className="p-6 max-w-6xl mx-auto">
    <div>
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-6">Maintenamce Request</h2>
      
    </div>
      
      {/* Gett My Invoices Component */}
      <GetMyInvoices refreshMaintenance={refreshBilling} />
      

       {/* Process payment Component */}
       <ProcessPayment refreshMaintenance={refreshBilling} />

       {/* GET payment History Component */}
       <GetPaymentHistory refreshMaintenance={refreshBilling} />
    </div>
       
    
    );
};

export default GetInvoiceResident;