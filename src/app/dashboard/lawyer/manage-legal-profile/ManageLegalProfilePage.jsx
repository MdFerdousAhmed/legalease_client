"use client";

import { useState } from "react";

export default function ManageLegalProfilePage() {
  const [services, setServices] = useState([
    {
      id: "1",
      name: "Criminal Defense Service",
      bio: "Expert in criminal law cases.",
      fee: 5000,
      specialization: "Criminal Law",
      image: "",
    },
    {
      id: "2",
      name: "Family Legal Service",
      bio: "Handles divorce and family issues.",
      fee: 7000,
      specialization: "Family Law",
      image: "",
    },
  ]);

  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    name: "",
    bio: "",
    fee: "",
    specialization: "",
    image: "",
  });

  // DELETE
  const handleDelete = (id) => {
    setServices(services.filter((item) => item.id !== id));
  };

  // OPEN EDIT
  const handleEdit = (service) => {
    setEditing(service);
    setForm(service);
  };

  // HANDLE CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SAVE UPDATE
  const handleUpdate = () => {
    setServices(
      services.map((item) =>
        item.id === editing.id ? { ...form, id: editing.id } : item
      )
    );

    setEditing(null);
    setForm({
      name: "",
      bio: "",
      fee: "",
      specialization: "",
      image: "",
    });
  };

  // IMAGE UPLOAD (ImgBB placeholder)
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    // 👉 Replace with your ImgBB API key
    const apiKey = "YOUR_IMGBB_API_KEY";

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (data?.data?.url) {
      setForm({ ...form, image: data.data.url });
    }
  };

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">
        Manage Legal Services
      </h1>

      {/* SERVICES LIST */}
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((item) => (
          <div key={item.id} className="rounded-lg border p-4">
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="mb-3 h-40 w-full rounded object-cover"
              />
            )}

            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.bio}</p>

            <div className="mt-2 text-sm">
              <p>Specialization: {item.specialization}</p>
              <p>Fee: ৳ {item.fee}</p>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleEdit(item)}
                className="rounded bg-blue-500 px-3 py-1 text-white"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                className="rounded bg-red-500 px-3 py-1 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EDIT MODAL */}
      {editing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-lg rounded-lg bg-white p-6">
            <h2 className="mb-4 text-lg font-bold">
              Edit Legal Service
            </h2>

            <div className="space-y-3">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Service Name"
                className="w-full rounded border p-2"
              />

              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                placeholder="Bio"
                className="w-full rounded border p-2"
              />

              <input
                name="fee"
                value={form.fee}
                onChange={handleChange}
                placeholder="Fee"
                className="w-full rounded border p-2"
              />

              <input
                name="specialization"
                value={form.specialization}
                onChange={handleChange}
                placeholder="Specialization"
                className="w-full rounded border p-2"
              />

              {/* IMAGE UPLOAD */}
              <input
                type="file"
                onChange={handleImageUpload}
              />

              {form.image && (
                <img
                  src={form.image}
                  className="h-32 w-full rounded object-cover"
                />
              )}
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setEditing(null)}
                className="rounded bg-gray-300 px-4 py-2"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="rounded bg-green-600 px-4 py-2 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}