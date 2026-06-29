"use client";

import { useState } from "react";
import { hireLawyer } from "@/lib/actions/hire";
import { useRouter } from "next/navigation";

export default function HireLawyerForm({ client, lawyer }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    phone: "",
    address: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const hiringData = {
        lawyerId: lawyer?._id,
        lawyerName: lawyer?.name,
        specialization: lawyer?.specialization,
        fee: lawyer?.fee,
        clientName: client?.name,
        clientEmail: client?.email,
        clientId: client?.id,
        ...formData,
        dateJoined: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        status: "pending",
      };

      const res = await hireLawyer(hiringData);

      if (res) {
        setFormData({
          phone: "",
          address: "",
          comments: "",
        });

        alert("Hiring request submitted successfully!");

        router.push("/dashboard/user/hiring-history");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-6">Hire Lawyer</h2>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-lg">{lawyer.name}</h3>
        <p>{lawyer.specialization}</p>
        <p>Fee: ${lawyer.fee}</p>
      </div>

      <form onSubmit={handleSubmit} action="/api/checkout_sessions" method="POST" className="space-y-4">
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="text"
          name="comments"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Submit Hiring Request
        </button>
      </form>
    </div>
  );
}