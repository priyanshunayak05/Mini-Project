import React from 'react';
import { formatDate } from '../utils/helpers';

const Receipt = ({ challan, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Challan Receipt</h1>
        <div className="space-y-2 mb-6">
          <p><b>Challan ID:</b> {challan.challanId}</p>
          <p><b>Date:</b> {formatDate(challan.date)}</p>
          <p><b>Vehicle:</b> {challan.vehicleNumber} ({challan.vehicleType})</p>
          <p><b>Violation:</b> {challan.violation}</p>
          <p><b>Location:</b> {challan.location}</p>
          <p><b>Fine Amount:</b> ₹{challan.fineAmount}</p>
          <p><b>Status:</b> {challan.status}</p>
        </div>

        {challan.evidence?.screenshot && (
          <div className="mb-6">
            <img 
              src={challan.evidence.screenshot} 
              alt="Challan Evidence" 
              className="w-full h-60 object-cover rounded border" 
            />
          </div>
        )}

        <div className="flex gap-4">
          <button 
            onClick={() => window.print()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Print Receipt
          </button>
          <button 
            onClick={onBack}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;