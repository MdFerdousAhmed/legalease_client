"use client";

import React, { useState, useEffect } from "react";
import { Input, Button } from "@heroui/react";

export default function UpdateProfilePage({ users }) {
  // Initialize state with an empty string
  const [fullName, setFullName] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🛠️ DEBUG LOG: This will print out exactly what your parent component is passing down
  useEffect(() => {
    console.log("=== RECEIVED USER PROP DATA ===", users);
  }, [users]);

  // Safely extract the string property to fix the [object Object] bug
  useEffect(() => {
    if (users && users.name) {
      setFullName(users.name); // Grabs "tom hang" directly
    }
  }, [users]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Identify the User ID dynamically (Checks for MongoDB object format vs standard format)
      const userId = users?._id || users?.id;
      
      if (!userId) {
        throw new Error("Unable to locate your User ID. Look at your browser console to see what prop data is missing!");
      }


      let imageUrl = users?.image || ""; // Keep the old image by default

      // 3. If a new file is chosen, upload it to ImgBB
      if (file) {
        const formData = new FormData();
        formData.append("image", file);

        const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY; 
        
        if (!IMGBB_API_KEY) {
          throw new Error("Next.js Error: NEXT_PUBLIC_IMGBB_API_KEY is missing from your .env.local file.");
        }
        
        const imgResponse = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
          method: "POST",
          body: formData,
        });
        
        const imgData = await imgResponse.json();
        if (imgData.success) {
          imageUrl = imgData.data.display_url; 
        } else {
          throw new Error(imgData.error?.message || "Failed to upload image to ImgBB.");
        }
      }

      // 4. Prepare payload matching your backend patch setup
      const updatedUserPayload = {
        name: fullName,
        image: imageUrl
      };

      // 5. Send the PATCH request to your Node/Express backend
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${token}` // Verified via your backend's verifyToken middleware
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
      console.error("Frontend Error Handler:", error);
      alert(error.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      {/* Title Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Update Profile</h1>

      {/* Profile Form Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
        <form onSubmit={handleUpdate} className="space-y-6">
          
          {/* Full Name Input */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-2">
              Full Name
            </label>
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

          {/* Profile Picture File Selection */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-2">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-medium
                file:bg-gray-100 file:text-gray-700
                hover:file:bg-gray-200 cursor-pointer"
            />
          </div>

          {/* Submit Action Button */}
          <Button
            type="submit"
            color="primary"
            radius="lg"
            isLoading={loading} 
            className="w-full bg-[#1a66ff] hover:bg-[#0052cc] text-white font-medium text-base h-12 transition-colors shadow-sm"
          >
            {loading ? "Updating..." : "Update Profile"}
          </Button>

        </form>
      </div>
    </div>
  );
}