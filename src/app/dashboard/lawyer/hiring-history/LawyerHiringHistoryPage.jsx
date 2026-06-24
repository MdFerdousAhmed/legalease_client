// "use client";

// import React from 'react';
// import { Table } from '@heroui/react';

// const LawyerHiringHistoryPage = ({ hires = [] }) => {

//   // Helper to format MongoDB ISO date string into YYYY-MM-DD
//   const formatDate = (dateObj) => {
//     if (!dateObj || !dateObj.$date) return '';
//     return dateObj.$date.split('T')[0];
//   };

//   // Action handlers (placeholder logic)
//   const handleAccept = (id) => {
//     console.log("Accepted request:", id);
//     // Add API call logic here
//   };

//   const handleReject = (id) => {
//     console.log("Rejected request:", id);
//     // Add API call logic here
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       {/* Table Heading */}
//       <h1 className="text-3xl font-bold text-gray-900 mb-6">Hiring Requests</h1>

//       {/* Hero UI Table Wrapper */}
//       <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
//         <Table className="w-full bg-white text-left text-sm text-gray-700">
//           <Table.ScrollContainer>
//             <Table.Content aria-label="Lawyer hiring requests table">

//               {/* Table Header */}
//               <Table.Header className="bg-gray-50 border-b border-gray-200">
//                 <Table.Column className="px-6 py-4 font-bold text-gray-900 text-[15px]">Client Name</Table.Column>
//                 <Table.Column className="px-6 py-4 font-bold text-gray-900 text-[15px]">Request Date</Table.Column>
//                 <Table.Column className="px-6 py-4 font-bold text-gray-900 text-[15px]">Status</Table.Column>
//                 <Table.Column className="px-6 py-4 font-bold text-gray-900 text-[15px] text-center">Actions</Table.Column>
//               </Table.Header>

//               {/* Table Body */}
//               <Table.Body>
//                 {hires.map((item) => {
//                   const itemId = item._id?.$oid || item._id;
//                   return (
//                     <Table.Row key={itemId} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors">

//                       {/* Client Name */}
//                       <Table.Cell className="px-6 py-5 font-medium text-gray-900 text-base">
//                         {item.clientName}
//                       </Table.Cell>

//                       {/* Request Date */}
//                       <Table.Cell className="px-6 py-5 text-gray-700 text-base">
//                         {formatDate(item.createdAt)}
//                       </Table.Cell>

//                       {/* Status */}
//                       <Table.Cell className="px-6 py-5 text-base font-semibold text-amber-500 capitalize">
//                         {item.status}
//                       </Table.Cell>

//                       {/* Actions */}
//                       <Table.Cell className="px-6 py-5">
//                         <div className="flex items-center justify-center gap-3">
//                           <button
//                             onClick={() => handleAccept(itemId)}
//                             className="px-5 py-2 bg-[#00c853] hover:bg-[#00b047] text-white font-medium rounded-lg text-[15px] transition-colors shadow-sm"
//                           >
//                             Accept
//                           </button>
//                           <button
//                             onClick={() => handleReject(itemId)}
//                             className="px-5 py-2 bg-[#ff3333] hover:bg-[#e62e2e] text-white font-medium rounded-lg text-[15px] transition-colors shadow-sm"
//                           >
//                             Reject
//                           </button>
//                         </div>
//                       </Table.Cell>

//                     </Table.Row>
//                   );
//                 })}
//               </Table.Body>

//             </Table.Content>
//           </Table.ScrollContainer>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default LawyerHiringHistoryPage;


"use client";

import React from 'react';
import { Table } from '@heroui/react';

const LawyerHiringHistoryPage = ({ hires = [] }) => {

  // Helper to format MongoDB ISO date string into YYYY-MM-DD
  const formatDate = (dateInput) => {
    if (!dateInput) return '';

    // Extract string if it's coming from MongoDB wrapper {$date: "..."}
    const dateStr = dateInput.$date ? dateInput.$date : dateInput;

    return dateStr.split('T')[0];
  };

  const handleAccept = (id) => {
    console.log("Accepted request:", id);
  };

  const handleReject = (id) => {
    console.log("Rejected request:", id);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Table Heading */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Hiring Requests</h1>

      {/* Hero UI Table Wrapper */}
      <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <Table className="w-full bg-white text-left text-sm text-gray-700">
          <Table.ScrollContainer>
            <Table.Content aria-label="Lawyer hiring requests table">

              {/* Table Header */}
              <Table.Header className="bg-gray-50 border-b border-gray-200">
                {/* Added isRowHeader here to fix the console error */}
                <Table.Column isRowHeader className="px-6 py-4 font-bold text-gray-900 text-[15px]">
                  Client Name
                </Table.Column>
                <Table.Column className="px-6 py-4 font-bold text-gray-900 text-[15px]">
                  Request Date
                </Table.Column>
                <Table.Column className="px-6 py-4 font-bold text-gray-900 text-[15px]">
                  Status
                </Table.Column>
                <Table.Column className="px-6 py-4 font-bold text-gray-900 text-[15px] text-center">
                  Actions
                </Table.Column>
              </Table.Header>

              {/* Table Body */}
              <Table.Body>
                {hires.map((item) => {
                  const itemId = item._id?.$oid || item._id;
                  return (
                    <Table.Row key={itemId} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors">

                      {/* Client Name */}
                      <Table.Cell className="px-6 py-5 font-medium text-gray-900 text-base">
                        {item.clientName}
                      </Table.Cell>

                      {/* Request Date */}
                      <Table.Cell className="px-6 py-5 text-gray-700 text-base">
                        {formatDate(item.createdAt)}
                      </Table.Cell>

                      {/* Status */}
                      <Table.Cell className="px-6 py-5 text-base font-semibold text-amber-500 capitalize">
                        {item.status}
                      </Table.Cell>

                      {/* Actions */}
                      <Table.Cell className="px-6 py-5">
                        <div className="flex items-center justify-center gap-3">
                          <button
                            onClick={() => handleAccept(itemId)}
                            className="px-5 py-2 bg-[#00c853] hover:bg-[#00b047] text-white font-medium rounded-lg text-[15px] transition-colors shadow-sm"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleReject(itemId)}
                            className="px-5 py-2 bg-[#ff3333] hover:bg-[#e62e2e] text-white font-medium rounded-lg text-[15px] transition-colors shadow-sm"
                          >
                            Reject
                          </button>
                        </div>
                      </Table.Cell>

                    </Table.Row>
                  );
                })}
              </Table.Body>

            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default LawyerHiringHistoryPage;