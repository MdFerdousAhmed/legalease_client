// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function BrowseLawyers() {
//   const [lawyers, setLawyers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [specialization, setSpecialization] = useState("");
//   const [availability, setAvailability] = useState("");

//   useEffect(() => {
//     getLawyers();
//   }, [search, specialization, availability]);

//   const getLawyers = async () => {
//     try {
//       setLoading(true);

//       const res = await axios.get(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/lawyers`,
//         {
//           params: {
//             search,
//             specialization,
//             availability,
//           },
//         }
//       );

//       // API should return array or {data:[...]}
//       setLawyers(res.data?.data || res.data || []);
//     } catch (error) {
//       console.error("Failed to fetch lawyers:", error);
//       setLawyers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-900 text-white py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <h1 className="text-4xl font-bold text-center mb-10">
//           Browse Lawyers
//         </h1>

//         {/* Filters */}
//         <div className="grid md:grid-cols-3 gap-4 mb-8">
//           <input
//             type="text"
//             placeholder="Search lawyer..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="border border-slate-700 bg-slate-800 rounded-lg px-4 py-2"
//           />

//           <select
//             value={specialization}
//             onChange={(e) => setSpecialization(e.target.value)}
//             className="border border-slate-700 bg-slate-800 rounded-lg px-4 py-2"
//           >
//             <option value="">All Specializations</option>
//             <option value="Criminal Defense Law">
//               Criminal Defense Law
//             </option>
//             <option value="Family Law">Family Law</option>
//             <option value="Corporate Law">Corporate Law</option>
//             <option value="Immigration Law">Immigration Law</option>
//             <option value="Real Estate Law">Real Estate Law</option>
//           </select>

//           <select
//             value={availability}
//             onChange={(e) => setAvailability(e.target.value)}
//             className="border border-slate-700 bg-slate-800 rounded-lg px-4 py-2"
//           >
//             <option value="">All Status</option>
//             <option value="Available">Available</option>
//             <option value="Busy">Busy</option>
//           </select>
//         </div>

//         {/* Loading */}
//         {loading ? (
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {[...Array(8)].map((_, index) => (
//               <div
//                 key={index}
//                 className="h-72 bg-slate-800 rounded-xl animate-pulse"
//               />
//             ))}
//           </div>
//         ) : lawyers.length === 0 ? (
//           <div className="text-center text-gray-400">
//             No lawyers found.
//           </div>
//         ) : (
//           <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {lawyers.map((lawyer) => (
//               <motion.div
//                 key={lawyer._id}
//                 whileHover={{ y: -5 }}
//                 className="bg-slate-800 rounded-xl overflow-hidden shadow-lg"
//               >
//                 <div className="p-5">
//                   <img
//                     src={lawyer.photoUrl}
//                     alt={lawyer.name}
//                     className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-amber-500"
//                   />

//                   <h2 className="text-xl font-bold text-center mt-4">
//                     {lawyer.name}
//                   </h2>

//                   <p className="text-amber-400 text-center text-sm mt-1">
//                     {lawyer.specialization}
//                   </p>

//                   <p className="text-gray-400 text-sm mt-4 line-clamp-3">
//                     {lawyer.bio}
//                   </p>

//                   <div className="flex justify-between mt-4 text-sm">
//                     <span>
//                       Fee: <strong>${lawyer.fee}</strong>
//                     </span>

//                     <span
//                       className={`px-2 py-1 rounded text-xs ${
//                         lawyer.status === "Available"
//                           ? "bg-green-600"
//                           : "bg-red-600"
//                       }`}
//                     >
//                       {lawyer.status}
//                     </span>
//                   </div>
//                 </div>

//                 <Link
//                   href={`/browse-lawyers/${lawyer._id}`}
//                   className="block text-center bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3"
//                 >
//                   View Profile
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Link from "next/link";
import { Pagination } from '@heroui/react';

export default function BrowseLawyers() {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter States
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [availability, setAvailability] = useState("");

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const limit = 8; 

  // Reset to page 1 automatically when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, specialization, availability]);

  useEffect(() => {
    let isMounted = true;

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
              page: currentPage,
              limit: limit,
            },
          }
        );

        if (isMounted) {
          // SAFEGUARD: Fallback values if your backend API doesn't send pagination keys yet
          const responseData = res.data?.data || res.data || [];
          const serverTotalPages = res.data?.totalPages || 1;
          const serverTotalItems = res.data?.totalItems || responseData.length;

          setLawyers(responseData);
          setTotalPages(serverTotalPages);
          setTotalItems(serverTotalItems);
        }
      } catch (error) {
        console.error("Failed to fetch lawyers:", error);
        if (isMounted) setLawyers([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    getLawyers();

    return () => {
      isMounted = false;
    };
  }, [search, specialization, availability, currentPage]);

  // Calculations for the "Showing X-Y of Z results" text safely
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * limit + 1;
  const endItem = Math.min(currentPage * limit, totalItems);

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
            className="border border-slate-700 bg-slate-800 rounded-lg px-4 py-2 text-white"
          />

          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="border border-slate-700 bg-slate-800 rounded-lg px-4 py-2 text-white"
          >
            <option value="">All Specializations</option>
            <option value="Criminal Defense Law">Criminal Defense Law</option>
            <option value="Family Law">Family Law</option>
            <option value="Corporate Law">Corporate Law</option>
            <option value="Immigration Law">Immigration Law</option>
            <option value="Real Estate Law">Real Estate Law</option>
          </select>

          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="border border-slate-700 bg-slate-800 rounded-lg px-4 py-2 text-white"
          >
            <option value="">All Status</option>
            <option value="Available">Available</option>
            <option value="Busy">Busy</option>
          </select>
        </div>

        {/* Loading / Grid */}
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
          <>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
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

            {/* Strict HeroUI-Compliant Pagination Component */}
            <div className="flex justify-center mt-8">
              <Pagination>
                <Pagination.Summary>
                  Showing {startItem}-{endItem} of {totalItems} results
                </Pagination.Summary>
                <Pagination.Content>
                  
                  {/* Previous Button Wrapper */}
                  <Pagination.Item>
                    <Pagination.Previous 
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                      disabled={currentPage === 1}
                      className="cursor-pointer disabled:opacity-40"
                    >
                      <Pagination.PreviousIcon className=" text-sky-500 font-bold" />
                      <span className=" text-sky-500 font-bold">Previous</span>
                    </Pagination.Previous>
                  </Pagination.Item>

                  {/* Loop Page Items inside HeroUI Sub-elements */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Pagination.Item key={page}>
                      <Pagination.Link
                        isActive={currentPage === page}
                        onClick={() => setCurrentPage(page)}
                        className={`cursor-pointer px-3 py-1 rounded transition-colors ${
                          currentPage === page 
                            ? "bg-amber-500 text-black font-bold" 
                            : "text-white hover:bg-slate-700"
                        }`}
                      >
                        {page}
                      </Pagination.Link>
                    </Pagination.Item>
                  ))}

                  {/* Next Button Wrapper */}
                  <Pagination.Item>
                    <Pagination.Next
                      onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="cursor-pointer disabled:opacity-40"
                    >
                      <span className=" text-sky-500 font-bold">Next</span>
                      <Pagination.NextIcon className=" text-sky-500 font-bold" />
                    </Pagination.Next>
                  </Pagination.Item>

                </Pagination.Content>
              </Pagination>
            </div>
          </>
        )}
      </div>
    </div>
  );
}