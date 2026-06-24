// "use client";

// import { useState } from "react";

// export default function UpdateProfilePage({users}) {
//   const [fullName, setFullName] = useState(users);
//   const [profileImage, setProfileImage] = useState(null);
//   const [preview, setPreview] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setProfileImage(file);

//     if (file) {
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // TODO: send to backend API
//     console.log("Full Name:", fullName);
//     console.log("Profile Image:", profileImage);

//     alert("Profile updated successfully");
//   };

//   return (
//     <div className="mx-auto max-w-xl p-6">
//       <h1 className="mb-6 text-2xl font-bold">Update Profile</h1>

//       <form
//         onSubmit={handleSubmit}
//         className="space-y-5 rounded-lg border p-6"
//       >
//         {/* Full Name */}
//         <div>
//           <label className="mb-2 block text-sm font-medium">
//             Full Name
//           </label>
//           <input
//             type="text"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             placeholder="Enter your full name"
//             className="w-full rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
//           />
//         </div>

//         {/* Profile Image */}
//         <div>
//           <label className="mb-2 block text-sm font-medium">
//             Profile Picture
//           </label>

//           <input type="file" accept="image/*" onChange={handleImageChange} />

//           {preview && (
//             <div className="mt-3">
//               <img
//                 src={preview}
//                 alt="Preview"
//                 className="h-24 w-24 rounded-full object-cover border"
//               />
//             </div>
//           )}
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
//         >
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// }


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