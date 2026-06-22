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