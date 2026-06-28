import { headers } from "next/headers";
import { auth } from "../auth";

export const getUsersList = async () => {
    const users = await auth.api.listUsers({
        query: {
            sortBy: "createdAt",
            sortDirection: "desc"
        },
        // This endpoint requires session cookies.
        headers: await headers(),
    });
    return users;
}

export const updateUserRole = async (id, newRole) => {
  try {
    // Retrieve your JWT token (adjust this based on where you store it: localStorage, cookies, or state) 

    const response = await fetch(`http://localhost:5000/api/users/${id}/role`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({ role: newRole }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to update user role');
    }

    return data; // Returns { success: true, message: "...", result: ... }
  } catch (error) {
    console.error("Frontend Error updating role:", error.message);
    throw error; // Re-throw so your UI component can catch it and display an error message
  }
};