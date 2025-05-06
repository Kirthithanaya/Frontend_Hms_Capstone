import React, { useState } from 'react';
import GenerateInvoice from '../../components/admin/Billing/GenerateInvoice';
import GetAllInvoices from '../../components/admin/Billing/GetAllInvoices';


const BillingsAdmin = () => {
     const [refresh, setRefresh] = useState(false);
        
          const refreshBilling = () => {
            setRefresh(!refresh); // Toggle to refresh room list
          };
    return (
        <div className="p-6 max-w-6xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text-blue-700 text-center mb-6">Maintenamce Request</h2>
          
        </div>
          
          {/* Generate Invoice Component */}
          <GenerateInvoice refreshMaintenance={refreshBilling} />
          


            {/* GetAll Invoices Component */}
            <GetAllInvoices refreshMaintenance={refreshBilling} />

            
        </div>
          
        
      );
   
};

export default BillingsAdmin;