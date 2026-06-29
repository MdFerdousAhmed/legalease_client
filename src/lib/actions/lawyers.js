"use server"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const createLawyer = async(newLawyerData) => {
  const res = await fetch(`${baseUrl}/api/lawyers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newLawyerData),
  })
  return res.json();
}

export const getLawyers = async () => {
  const res = await fetch(`${baseUrl}/api/lawyers`, {
    cache: "no-store"
  });

  return res.json();
};

export const lawyerGet = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/users/${id}`); // Adjust your API URL path
    
    // Check if the response is not HTML/Error
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Server returned status ${response.status}:`, errorText);
      return null; // Return null instead of crashing the application
    }

    return await response.json();
  } catch (error) {
    console.error("Network error inside lawyerGet:", error);
    return null;
  }
};