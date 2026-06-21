"use client";

import { useState } from "react";

export default function UpdateProfilePage() {
  const [fullName, setFullName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: send to backend API
    console.log("Full Name:", fullName);
    console.log("Profile Image:", profileImage);

    alert("Profile updated successfully (demo)");
  };

  return (
    <div className="mx-auto max-w-xl p-6">
      <h1 className="mb-6 text-2xl font-bold">Update Profile</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-lg border p-6"
      >
        {/* Full Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
          />
        </div>

        {/* Profile Image */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Profile Picture
          </label>

          <input type="file" accept="image/*" onChange={handleImageChange} />

          {preview && (
            <div className="mt-3">
              <img
                src={preview}
                alt="Preview"
                className="h-24 w-24 rounded-full object-cover border"
              />
            </div>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}