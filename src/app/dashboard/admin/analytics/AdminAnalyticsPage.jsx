"use client";

export default function AdminAnalyticsPage() {
  const stats = {
    totalUsers: 120,
    totalLawyers: 35,
    totalHires: 210,
    totalRevenue: 125000,
  };

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Analytics Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Users</p>
          <h2 className="mt-2 text-3xl font-bold">
            {stats.totalUsers}
          </h2>
        </div>

        <div className="rounded-xl border p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Lawyers</p>
          <h2 className="mt-2 text-3xl font-bold">
            {stats.totalLawyers}
          </h2>
        </div>

        <div className="rounded-xl border p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Hires</p>
          <h2 className="mt-2 text-3xl font-bold">
            {stats.totalHires}
          </h2>
        </div>

        <div className="rounded-xl border p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <h2 className="mt-2 text-3xl font-bold">
            ৳ {stats.totalRevenue.toLocaleString()}
          </h2>
        </div>
      </div>

      {/* Future Chart Area */}
      <div className="mt-8 rounded-xl border p-6">
        <h2 className="mb-2 text-xl font-semibold">
          Revenue Analytics
        </h2>
        <p className="text-gray-500">
          Monthly revenue chart will be displayed here using
          Recharts or Chart.js.
        </p>
      </div>
    </div>
  );
}