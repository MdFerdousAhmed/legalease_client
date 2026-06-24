import { lawyerGet } from "@/lib/api/lawyer";
import Image from "next/image";
import Link from "next/link";

export default async function LawyerDetailsPage({ params }) {
  const {id} = await params;
  const data = await lawyerGet(id);

  const lawyer = data;
  console.log('object',lawyer);

  if (!lawyer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Lawyer Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl shadow-lg overflow-hidden">
        
        <div className="bg-slate-700 p-8 flex flex-col md:flex-row gap-8 items-center">
          <img
            src={lawyer.photoUrl}
            alt={lawyer.name}
            className="w-40 h-40 rounded-full object-cover border-4 border-amber-500"
          />

          <div>
            <h1 className="text-4xl font-bold">{lawyer.name}</h1>

            <p className="text-amber-400 text-lg mt-2">
              {lawyer.specialization}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  lawyer.status === "Available"
                    ? "bg-green-600"
                    : "bg-red-600"
                }`}
              >
                {lawyer.status}
              </span>

              <span className="px-3 py-1 rounded-full bg-slate-600 text-sm">
                Fee: ${lawyer.fee}
              </span>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Professional Summary
            </h2>

            <p className="text-gray-300 leading-relaxed">
              {lawyer.bio}
            </p>
          </div>

          <div className="border-t border-slate-700 pt-6">
            <h2 className="text-2xl font-semibold mb-4">
              Lawyer Information
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-700 p-4 rounded-xl">
                <p className="text-gray-400">Name</p>
                <p className="font-semibold">{lawyer.name}</p>
              </div>

              <div className="bg-slate-700 p-4 rounded-xl">
                <p className="text-gray-400">Specialization</p>
                <p className="font-semibold">
                  {lawyer.specialization}
                </p>
              </div>

              <div className="bg-slate-700 p-4 rounded-xl">
                <p className="text-gray-400">Consultation Fee</p>
                <p className="font-semibold">${lawyer.fee}</p>
              </div>

              <div className="bg-slate-700 p-4 rounded-xl">
                <p className="text-gray-400">Date Joined</p>
                <p className="font-semibold">{lawyer.dateJoined}</p>
              </div>

              <div className="bg-slate-700 p-4 rounded-xl">
                <p className="text-gray-400">Availability</p>
                <p className="font-semibold">{lawyer.status}</p>
              </div>
            </div>
          </div>

          <Link href={`/browse-lawyers/${id}/hire`} className=" flex items-center justify-center w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 p-6 rounded-xl transition">
            Hire This Lawyer
          </Link>
        </div>
      </div>
    </div>
  );
}