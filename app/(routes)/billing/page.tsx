import React from 'react';
import { PricingTable } from '@clerk/nextjs'; // ✅ Correct import

function Billing() {
  return (
    <div className="p-6">
      <h2 className="font-bold text-3xl text-center">Choose Your Plan</h2>
      <p className="text-lg text-gray-600 text-center mb-6">
        Select a subscription bundle to get full access to all AI tools.
      </p>

       <div className='mt-6'><PricingTable/></div>
      
    </div>
  );
}

export default Billing;
