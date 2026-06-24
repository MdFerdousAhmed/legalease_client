const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getLawyer = async (lawyerId, status = 'Available') => {
  const res = await fetch(`${baseUrl}/api/lawyers?lawyerId=${lawyerId}&status=${status}`);
  return res.json();
 }

  export const lawyerGet = async(id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/lawyers/${id}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

