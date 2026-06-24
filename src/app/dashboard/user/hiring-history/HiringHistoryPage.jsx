"use client";

import React from 'react';
import { Table } from '@heroui/react';

const HiringHistoryPage = ({ hires = [] }) => {
  
  // Cleanly extracts and formats the ISO timestamp string down to YYYY-MM-DD
  const formatDate = (dateObj) => {
    if (!dateObj) return '';
    const dateStr = dateObj.$date ? dateObj.$date : dateObj;
    return typeof dateStr === 'string' ? dateStr.split('T')[0] : '';
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Table Heading */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Hiring History</h1>

      {/* Hero UI Table Component Container */}
      <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <Table className="w-full bg-white text-left text-sm text-gray-700">
          <Table.ScrollContainer>
            <Table.Content aria-label="Lawyer hiring history table">
              
              {/* Table Header Structure */}
              <Table.Header className="bg-gray-50 border-b border-gray-200">
                {/* fulfills the critical isRowHeader accessibility constraint */}
                <Table.Column isRowHeader className="px-6 py-4 font-bold text-gray-900 text-[15px]">
                  Lawyer
                </Table.Column>
                <Table.Column className="px-6 py-4 font-bold text-gray-900 text-[15px]">
                  Specialization
                </Table.Column>
                <Table.Column className="px-6 py-4 font-bold text-gray-900 text-[15px]">
                  Fee
                </Table.Column>
                <Table.Column className="px-6 py-4 font-bold text-gray-900 text-[15px]">
                  Hiring Date
                </Table.Column>
                <Table.Column className="px-6 py-4 font-bold text-gray-900 text-[15px]">
                  Status
                </Table.Column>
              </Table.Header>

              {/* Table Data Rows */}
              <Table.Body>
                {hires.map((item) => {
                  const id = item._id?.$oid || item._id 
                  return (
                    <Table.Row key={id} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors">
                      
                      {/* Lawyer Name */}
                      <Table.Cell className="px-6 py-5 font-medium text-gray-900 text-base">
                        {item.lawyerName}
                      </Table.Cell>
                      
                      {/* Specialization */}
                      <Table.Cell className="px-6 py-5 text-gray-700 text-base">
                        {item.specialization}
                      </Table.Cell>
                      
                      {/* Fee formatted with $ prefix */}
                      <Table.Cell className="px-6 py-5 text-gray-700 text-base">
                        $ {item.fee}
                      </Table.Cell>
                      
                      {/* Formatted Date string */}
                      <Table.Cell className="px-6 py-5 text-gray-700 text-base">
                        {formatDate(item.createdAt)}
                      </Table.Cell>
                      
                      {/* Clean Status string */}
                      <Table.Cell className="px-6 py-5 text-base font-semibold text-gray-900 lowercase">
                        {item.status}
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

export default HiringHistoryPage;