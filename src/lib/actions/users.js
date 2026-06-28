"use server";

import { revalidatePath } from "next/cache";

export async function updateUserRole(userId, userRole) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    if (!baseUrl) {
      throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
    }

    const response = await fetch(
      `${baseUrl}/api/users/${userId}/userRole`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userRole,
        }),
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    revalidatePath("/dashboard/admin/users");

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}