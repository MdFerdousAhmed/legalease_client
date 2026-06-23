"use client";

import { useEffect, useState } from "react";

export default function HiringHistoryPage() {
  const [hiringList] = useState([
    {
      id: "1",
      lawyerName: "Abdul Karim",
      specialization: "Criminal Law",
      fee: 500,
      hiringDate: "2026-06-20",
      status: "pending",
    },
    {
      id: "2",
      lawyerName: "Sarah Islam",
      specialization: "Family Law",
      fee: 700,
      hiringDate: "2026-06-18",
      status: "accepted",
    },
    {
      id: "3",
      lawyerName: "Tanvir Hossain",
      specialization: "Corporate Law",
      fee: 1000,
      hiringDate: "2026-06-15",
      status: "rejected",
    },
  ]);

  // const [lawyers, setLawyers] = useState([]);
  // console.log("lawyer",lawyers);

  // useEffect(() => {
  //   fetchLawyers();
  // }, []);

  // const fetchLawyers = async () => {
  //   const res = await axios.get("/api/lawyers");
  //   setLawyers(res.data);
  // };


  const getStatusStyle = (status) => {
    if (status === "pending") return "bg-yellow-100 text-yellow-700";
    if (status === "accepted") return "bg-green-100 text-green-700";
    if (status === "rejected") return "bg-red-100 text-red-700";
    return "";
  };

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Hiring History</h1>

      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3">Lawyer</th>
              <th className="px-4 py-3">Specialization</th>
              <th className="px-4 py-3">Fee</th>
              <th className="px-4 py-3">Hiring Date</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {hiringList.map((lawyer) => (
              <tr key={lawyer.id} className="border-t">
                <td className="px-4 py-3">{lawyer.lawyerName}</td>
                <td className="px-4 py-3">{lawyer.specialization}</td>
                <td className="px-4 py-3">$ {lawyer.fee}</td>
                <td className="px-4 py-3">{lawyer.hiringDate}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(
                      lawyer.status
                    )}`}
                  >
                    {lawyer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}