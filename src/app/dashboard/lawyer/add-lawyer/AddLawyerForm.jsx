"use client"

import { createLawyer } from '@/lib/actions/lawyers';
import { useSession } from '@/lib/auth-client';
import { toast } from '@heroui/react';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';

export default function AddLawyerForm() {
  const [formData, setFormData] = useState({
    name: '',
    specialization: 'Corporate & Intellectual Property',
    bio: '',
    fee: '',
    status: 'Available',
    photoUrl: ''// This will hold the returned URL from imgBB
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle text/select input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Simulate or execute imgBB upload handling
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Show instant local UI preview
    setImagePreview(URL.createObjectURL(file));


    // Optional actual imgBB API Implementation template:
    // -------------------------------------------------
    const imgBBKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

    const body = new FormData();
    body.append("image", file);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${imgBBKey}`,
        {
          method: "POST",
          body
        }
      );

      const data = await res.json();

      if (data?.success) {
        setFormData((prev) => ({
          ...prev,
          photoUrl: data.data.display_url // ✅ better than url
        }));
      } else {
        console.error("Upload failed:", data);
      }
    } catch (err) {
      console.error("Image upload failed", err);
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate backend payload synchronization
    setTimeout(async () => {
      const finalPayload = {
        ...formData,
        dateJoined: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
      };

      const res = await createLawyer(finalPayload)
      if (res.insertedId) {
        toast.success('lawyer posted successfully!')
        redirect("/dashboard/lawyer")
      }

      console.log('Synchronized Law Profile Payload:', finalPayload);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Clear notification banner after delay
      setTimeout(() => setSubmitSuccess(false), 4000);
    }, 1200);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 px-4">
      {/* Success Alert */}
      {submitSuccess && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-xl flex items-center">
          ✨ Lawyer profile entry successfully registered and initialized to the public system directory.
        </div>
      )}

      {/* Main Card Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">

        {/* Banner Section */}
        <div className="p-6 bg-slate-500 text-white">
          <h2 className="text-xl font-bold">Add Legal Professional</h2>
          <p className="text-xs text-slate-400 mt-1">Register dynamic field metadata to deploy an automated overview layout entry.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">

          {/* Image Upload Area for imgBB */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              High-Resolution Professional Photo (imgBB Integrated)
            </label>
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-xl bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden shrink-0">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-slate-400 text-xl">📷</span>
                )}
              </div>
              <div className="w-full">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                  className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                />
                <p className="text-xs text-slate-400 mt-1">Accepts high resolution PNG, JPG aspect ratios.</p>
              </div>
            </div>
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g., Attn. Sarah Jenkins"
              className="w-full text-sm px-3 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
            />
          </div>

          {/* Specialization & Consultation Fee */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Specialization / Category</label>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="w-full text-sm px-3 py-2.5 border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
              >
                <option value="Corporate & Intellectual Property">Corporate & Intellectual Property</option>
                <option value="Criminal Defense Law">Criminal Defense Law</option>
                <option value="Family & Divorce Law">Family & Divorce Law</option>
                <option value="Real Estate & Property Management">Real Estate & Property Management</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Consultation Fee</label>
              <input
                type="text"
                name="fee"
                value={formData.fee}
                onChange={handleChange}
                required
                placeholder="e.g., $250 / hr"
                className="w-full text-sm px-3 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Initial Operational Status */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Operational Availability</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="Available"
                  checked={formData.status === 'Available'}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                Available
              </label>
              <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="Busy"
                  checked={formData.status === 'Busy'}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                Busy
              </label>
            </div>
          </div>

          {/* Professional Summary / Bio */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Bio / Professional Summary</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows="4"
              required
              placeholder="Highlight professional background, core accomplishments, and court history rules..."
              className="w-full text-sm p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none"
            />
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-slate-500 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Reset Fields
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm shadow-blue-100 disabled:opacity-50"
            >
              {isSubmitting ? 'Registering...' : 'Publish Profile'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}