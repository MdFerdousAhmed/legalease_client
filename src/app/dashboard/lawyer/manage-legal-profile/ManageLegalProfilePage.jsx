"use client";

import React, { useState, useEffect } from "react";
import { Input, Button } from "@heroui/react";
import Link from "next/link";

export default function UpdateProfilePage({ users }) {

  // 1. Core States matching your specific lawyer schema keys
  const [fullName, setFullName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [bio, setBio] = useState("");
  const [fee, setFee] = useState("");
  const [status, setStatus] = useState("Available");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // 2. Hydrate states safely upon initialization
  useEffect(() => {
    if (users) {
      if (users.name) setFullName(users.name);
      if (users.specialization) setSpecialization(users.specialization);
      if (users.bio) setBio(users.bio);
      if (users.fee) setFee(users.fee);
      if (users.status) setStatus(users.status);
    }
  }, [users]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Extract structural ID safely (handles nesting under $oid)
      const userId = users?._id?.$oid || users?._id || users?.id;


      if (!userId) throw new Error("Could not extract a valid User ID.");

      let finalPhotoUrl = users?.photoUrl || "";

      // Upload profile graphic to ImgBB if changed
      if (file) {
        const formData = new FormData();
        formData.append("image", file);

        const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
        if (!IMGBB_API_KEY) throw new Error("Missing NEXT_PUBLIC_IMGBB_API_KEY in your env configuration.");

        const imgResponse = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
          method: "POST",
          body: formData,
        });

        const imgData = await imgResponse.json();
        if (imgData.success) {
          finalPhotoUrl = imgData.data.display_url;
        } else {
          throw new Error("Failed to upload image to ImgBB.");
        }
      }

      // Pack payload directly matching schema requirements
      const updatedUserPayload = {
        name: fullName,
        specialization,
        bio,
        fee,
        status,
        photoUrl: finalPhotoUrl
      };

      // Patch the database collection changes
      const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUserPayload)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert("🎉 Profile updated successfully!");
      } else {
        alert(`❌ Update failed: ${result.message}`);
      }
    } catch (error) {
      console.error(error);
      alert(error.message || "An unexpected network error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Update Profile</h1>
      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
        <form onSubmit={handleUpdate} className="space-y-6">

          {/* Full Name Input */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-2">Full Name</label>
            <Input
              type="text"
              variant="bordered"
              radius="lg"
              size="lg"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full text-base text-gray-900"
            />
          </div>

          {/* Specialization Input */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-2">Specialization</label>
            <Input
              type="text"
              variant="bordered"
              radius="lg"
              size="lg"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="w-full text-base text-gray-900"
            />
          </div>

          {/* Fee Input */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-2">Consultation Fee ($)</label>
            <Input
              type="number"
              variant="bordered"
              radius="lg"
              size="lg"
              value={fee}
              onChange={(e) => setFee(e.target.value)}
              className="w-full text-base text-gray-900"
            />
          </div>

          {/* Bio Text Input */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-2">Biography</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full text-base text-gray-900 p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 outline-none transition-colors"
              rows={3}
            />
          </div>

          {/* Profile Picture File Selection */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-2">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer"
            />
          </div>

          <Button
            as={Link}
            href="/dashboard/lawyer"
            type="submit"
            color="primary"
            radius="lg"
            isLoading={loading}
            className="w-full bg-[#1a66ff] hover:bg-[#0052cc] text-white font-medium text-base h-12 transition-colors shadow-sm"
          >
            Update Profile
          </Button>
        </form>
      </div>
    </div>
  );
}