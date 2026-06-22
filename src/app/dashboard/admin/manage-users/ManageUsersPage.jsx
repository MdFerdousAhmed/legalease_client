"use client";

import { useSession } from "@/lib/auth-client";
import { useState } from "react";

export default function ManageUsersPage() {
  const { data: session } = useSession();
  const user = session?.user;
  console.log(user);
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "Rakib Hasan",
      email: "rakib@gmail.com",
      role: "user",
    },
    {
      id: "2",
      name: "Sarah Islam",
      email: "sarah@gmail.com",
      role: "lawyer",
    },
    {
      id: "3",
      name: "Admin User",
      email: "admin@gmail.com",
      role: "admin",
    },
  ]);

  // DELETE USER
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // CHANGE ROLE
  const handleRoleChange = (id, newRole) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Manage Users</h1>

      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Change Role</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>

                {/* ROLE */}
                <td className="px-4 py-3 capitalize">
                  {user.role}
                </td>

                {/* CHANGE ROLE */}
                <td className="px-4 py-3">
                  <select
                    value={user.role}
                    onChange={(e) =>
                      handleRoleChange(user.id, e.target.value)
                    }
                    className="rounded border px-2 py-1"
                  >
                    <option value="user">User</option>
                    <option value="lawyer">Lawyer</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>

                {/* ACTIONS */}
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="rounded bg-red-500 px-3 py-1 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}