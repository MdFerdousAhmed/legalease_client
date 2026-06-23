"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BrowseLawyers() {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [availability, setAvailability] = useState("");

  useEffect(() => {
    getLawyers();
  }, [search, specialization, availability]);

  const getLawyers = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/lawyers`,
        {
          params: {
            search,
            specialization,
            availability,
          },
        }
      );

      // API should return array or {data:[...]}
      setLawyers(res.data?.data || res.data || []);
    } catch (error) {
      console.error("Failed to fetch lawyers:", error);
      setLawyers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-10">
          Browse Lawyers
        </h1>

        {/* Filters */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <input
            type="text"
            placeholder="Search lawyer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-slate-700 bg-slate-800 rounded-lg px-4 py-2"
          />

          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="border border-slate-700 bg-slate-800 rounded-lg px-4 py-2"
          >
            <option value="">All Specializations</option>
            <option value="Criminal Defense Law">
              Criminal Defense Law
            </option>
            <option value="Family Law">Family Law</option>
            <option value="Corporate Law">Corporate Law</option>
            <option value="Immigration Law">Immigration Law</option>
            <option value="Real Estate Law">Real Estate Law</option>
          </select>

          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="border border-slate-700 bg-slate-800 rounded-lg px-4 py-2"
          >
            <option value="">All Status</option>
            <option value="Available">Available</option>
            <option value="Busy">Busy</option>
          </select>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="h-72 bg-slate-800 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : lawyers.length === 0 ? (
          <div className="text-center text-gray-400">
            No lawyers found.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {lawyers.map((lawyer) => (
              <motion.div
                key={lawyer._id}
                whileHover={{ y: -5 }}
                className="bg-slate-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="p-5">
                  <img
                    src={lawyer.photoUrl}
                    alt={lawyer.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-amber-500"
                  />

                  <h2 className="text-xl font-bold text-center mt-4">
                    {lawyer.name}
                  </h2>

                  <p className="text-amber-400 text-center text-sm mt-1">
                    {lawyer.specialization}
                  </p>

                  <p className="text-gray-400 text-sm mt-4 line-clamp-3">
                    {lawyer.bio}
                  </p>

                  <div className="flex justify-between mt-4 text-sm">
                    <span>
                      Fee: <strong>${lawyer.fee}</strong>
                    </span>

                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        lawyer.status === "Available"
                          ? "bg-green-600"
                          : "bg-red-600"
                      }`}
                    >
                      {lawyer.status}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/browse-lawyers/${lawyer._id}`}
                  className="block text-center bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3"
                >
                  View Profile
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}