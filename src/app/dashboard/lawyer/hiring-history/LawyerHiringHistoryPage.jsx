"use client";

import { useState } from "react";

export default function LawyerHiringHistoryPage() {
  const [requests, setRequests] = useState([
    {
      id: "1",
      clientName: "Rakib Hasan",
      requestDate: "2026-06-20",
      status: "pending",
    },
    {
      id: "2",
      clientName: "Nusrat Jahan",
      requestDate: "2026-06-18",
      status: "pending",
    },
    {
      id: "3",
      clientName: "Tanvir Ahmed",
      requestDate: "2026-06-17",
      status: "pending",
    },
  ]);

  // ACCEPT
  const handleAccept = (id) => {
    setRequests((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "accepted" } : item
      )
    );
  };

  // REJECT
  const handleReject = (id) => {
    setRequests((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "rejected" } : item
      )
    );
  };

  const getStatusStyle = (status) => {
    if (status === "accepted") return "text-green-600";
    if (status === "rejected") return "text-red-600";
    return "text-yellow-600";
  };

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Hiring Requests</h1>

      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3">Client Name</th>
              <th className="px-4 py-3">Request Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-t">
                <td className="px-4 py-3">{req.clientName}</td>
                <td className="px-4 py-3">{req.requestDate}</td>

                {/* STATUS */}
                <td className={`px-4 py-3 font-medium ${getStatusStyle(req.status)}`}>
                  {req.status}
                </td>

                {/* ACTIONS */}
                <td className="px-4 py-3">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleAccept(req.id)}
                      disabled={req.status !== "pending"}
                      className="rounded bg-green-500 px-3 py-1 text-white disabled:opacity-50"
                    >
                      Accept
                    </button>

                    <button
                      onClick={() => handleReject(req.id)}
                      disabled={req.status !== "pending"}
                      className="rounded bg-red-500 px-3 py-1 text-white disabled:opacity-50"
                    >
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}