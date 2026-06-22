"use client";

import { useState } from "react";

export default function AllTransactionsPage() {
  const [transactions] = useState([
    {
      id: "TXN-1001",
      email: "rakib@gmail.com",
      amount: 500,
      date: "2026-06-20",
    },
    {
      id: "TXN-1002",
      email: "sarah@gmail.com",
      amount: 700,
      date: "2026-06-18",
    },
    {
      id: "TXN-1003",
      email: "lawyer1@gmail.com",
      amount: 1000,
      date: "2026-06-17",
    },
  ]);

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">All Transactions</h1>

      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3">Transaction ID</th>
              <th className="px-4 py-3">User / Lawyer Email</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-t">
                <td className="px-4 py-3 font-medium">{tx.id}</td>
                <td className="px-4 py-3">{tx.email}</td>
                <td className="px-4 py-3">$ {tx.amount}</td>
                <td className="px-4 py-3">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}