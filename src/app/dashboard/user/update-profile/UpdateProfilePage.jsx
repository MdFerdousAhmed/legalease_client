"use client";

import React, { useState, useEffect } from "react";
import { Input, Button } from "@heroui/react";

export default function UpdateProfilePage({ users }) {
  // Initialize state with an empty string
  const [fullName, setFullName] = useState("");
  const [file, setFile] = useState(null);

  // Safely extract the string property to fix the [object Object] bug
  useEffect(() => {
    if (users && users.name) {
      setFullName(users.name); // Grabs "tom hang" directly
    }
  }, [users]);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Profile updated:", { fullName, file });
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
            className="w-full bg-[#1a66ff] hover:bg-[#0052cc] text-white font-medium text-base h-12 transition-colors shadow-sm"
          >
            Update Profile
          </Button>

        </form>
      </div>
    </div>
  );
}