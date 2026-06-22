const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getLawyer = async (lawyerId, status = 'Available') => {
  const res = await fetch(`${baseUrl}/api/lawyers?lawyerId=${lawyerId}&status=${status}`);
  return res.json();
 }



// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const getLawyer = async (lawyerId, status) => {
//   try {
//     const params = new URLSearchParams();

//     if (lawyerId) {
//       params.append("lawyerId", lawyerId);
//     }

//     if (status) {
//       params.append("status", status);
//     }

//     const res = await fetch(
//       `${baseUrl}/api/lawyers?${params.toString()}`
//     );

//     if (!res.ok) {
//       throw new Error("Failed to fetch lawyers");
//     }

//     return await res.json();
//   } catch (error) {
//     return {
//       success: false,
//       message: error.message
//     };
//   }
// };