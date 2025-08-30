// import React, { useState } from 'react';
// import Header from './Header';
// import StatsCards from './StatsCards';
// import NavigationTabs from './NavigationTabs';
// import Dashboard from './DashboardTab';
// import ChallanCard from './ChallanCard';
// import PendingTab from './PendingTab';
// import Notifications from './Notifications';
// import ReceiptPage from './ReceiptPage';
// import DisputeModal from './DisputeModal';
// import { userData } from './data/userData';

// const Appt = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [selectedChallan, setSelectedChallan] = useState(null);
//   const [showDispute, setShowDispute] = useState(false);
//   const [page, setPage] = useState('dashboard');
//   const [receiptChallan, setReceiptChallan] = useState(null);

//   const [notifications] = useState([
//     { id: 1, message: "New challan detected for UP32XY5678", type: "new", date: "2025-08-15" },
//     { id: 2, message: "Payment due for challan CHL20250821-001", type: "reminder", date: "2025-08-20" }
//   ]);

//   const user = userData.user;
  
//   // Get all challans from all vehicles
//   const getAllChallans = () => {
//     return user.vehicles.flatMap(vehicle => 
//       vehicle.challans.map(challan => ({ ...challan, vehicleNumber: vehicle.vehicleNumber, vehicleType: vehicle.vehicleType }))
//     );
//   };

//   const allChallans = getAllChallans();
//   const PendingTab = allChallans.filter(c => c.status === 'Pending');
//   const totalFineAmount = PendingTab.reduce((sum, c) => sum + c.fineAmount, 0);

//   const filteredChallans = filterStatus === 'all' ? allChallans : 
//                           filterStatus === 'pending' ? PendingTab :
//                           allChallans.filter(c => c.status === 'Paid');

//   const handlePayNow = (challanId) => {
//     alert(`Redirecting to payment gateway for Challan ID: ${challanId}`);
//   };

//   const handleShare = (challan) => {
//     alert(`Sharing challan ${challan.challanId} via email/WhatsApp`);
//   };

//   const handleDispute = (challan) => {
//     setSelectedChallan(challan);
//     setShowDispute(true);
//   };

//   const handleViewReceipt = (challan) => {
//     setReceiptChallan(challan);
//     setPage('receipt');
//   };

//   const handleCloseDispute = () => {
//     setShowDispute(false);
//     setSelectedChallan(null);
//   };

//   // If viewing receipt page
//   if (page === 'receipt' && receiptChallan) {
//     return <ReceiptPage challan={receiptChallan} onBack={() => setPage('dashboard')} />;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto p-6">
//         <Header user={user} notifications={notifications} />
        
//         <StatsCards 
//           totalChallans={allChallans.length}
//           PendingTab={PendingTab.length}
//           totalFineAmount={totalFineAmount}
//           totalVehicles={user.vehicles.length}
//         />

//         <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

//         {/* Content based on active tab */}
//         {activeTab === 'dashboard' && (
//           <Dashboard 
//             challans={allChallans.slice(0, 4)}
//             onPayNow={handlePayNow}
//             onShare={handleShare}
//             onDispute={handleDispute}
//             onViewReceipt={handleViewReceipt}
//           />
//         )}

//         {activeTab === 'history' && (
//           <ChallanCard
//             challans={filteredChallans}
//             filterStatus={filterStatus}
//             setFilterStatus={setFilterStatus}
//             onPayNow={handlePayNow}
//             onShare={handleShare}
//             onDispute={handleDispute}
//             onViewReceipt={handleViewReceipt}
//           />
//         )}

//         {activeTab === 'pending' && (
//           <PendingTab 
//             PendingTab={PendingTab}
//             totalFineAmount={totalFineAmount}
//             onPayNow={handlePayNow}
//             onShare={handleShare}
//             onDispute={handleDispute}
//             onViewReceipt={handleViewReceipt}
//           />
//         )}

//         {activeTab === 'notifications' && (
//           <Notifications notifications={notifications} />
//         )}

//         {/* Dispute Modal */}
//         {showDispute && selectedChallan && (
//           <DisputeModal 
//             challan={selectedChallan}
//             onClose={handleCloseDispute}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Appt;