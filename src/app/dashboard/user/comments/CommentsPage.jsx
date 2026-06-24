"use client";

import { useState } from "react";

export default function CommentsPage({ hires }) {
  const [comments, setComments] = useState(hires);
  const [editingComment, setEditingComment] = useState(null);
  const [updatedText, setUpdatedText] = useState("");

  const handleDelete = (id) => {
    setComments(comments.filter((c) => c._id !== id));
  };

  const handleEdit = (comment) => {
    setEditingComment(comment);
    setUpdatedText(comment.comments);
  };

  const handleUpdate = () => {
    setComments(
      comments.map((c) =>
        c._id === editingComment._id
          ? { ...c, comments: updatedText }
          : c
      )
    );

    setEditingComment(null);
    setUpdatedText("");
  };

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">My Comments</h1>

      <div className="grid gap-4 md:grid-cols-2">
        {comments.map((hire) => (
          <div key={hire._id} className="rounded-lg border p-4 shadow-sm">
            <h2 className="font-semibold">{hire.lawyerName}</h2>

            <p className="mt-2 text-gray-600">
              {hire.comments}
            </p>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleEdit(hire)}
                className="rounded bg-blue-500 px-3 py-1 text-white text-sm"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(hire._id)}
                className="rounded bg-red-500 px-3 py-1 text-white text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingComment && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <h2 className="mb-4 text-lg font-bold">
              Edit Comment
            </h2>

            <textarea
              value={updatedText}
              onChange={(e) => setUpdatedText(e.target.value)}
              className="h-32 w-full rounded border p-2"
            />

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setEditingComment(null)}
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